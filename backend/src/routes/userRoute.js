import { Router } from "express";
import bcrypt, { hash } from 'bcrypt';
import  jwt from 'jsonwebtoken'
import { config } from "dotenv";
import { USER } from "../models/userSchema.js";
import { BLOCK } from "../models/blocklist.js";
import crypto from 'crypto';
import { sendEmail } from '../controllers/email.js';

export const userRouter = Router();

config();

export const userRoute=Router();

//get all users user/get
userRoute.get("/all",async(req,res)=>{
    try{
        const users=await USER.find();
        res.status(201).send(users)
    }catch(err){
        console.log("error while getAllUsers request");
        res.status(500).send("error :" ,err.message)
    }
})
const otpStore = {};

// Helper function to generate OTP
const generateOTP = () => {
  const hex = crypto.randomBytes(3).toString('hex');
  const otp = parseInt(hex, 16);
  return otp % 1000000;
};

// Helper function to set OTP with expiration
const setOTP = (email, otp) => {
  otpStore[email] = {
    otp,
    expiresAt: Date.now() + 5 * 60 * 1000 // 5 minutes from now
  };

  // Set timeout to delete OTP after 5 minutes
  setTimeout(() => {
    if (otpStore[email] && otpStore[email].expiresAt <= Date.now()) {
      delete otpStore[email];
    }
  }, 5 * 60 * 1000);
};

//register user/register
userRoute.post('/register',async(req,res)=>{
    let{userName,email,password,role}=req.body;
    try {
        //check user already register or not
        const userExist = await USER.findOne({email : email})
        if(userExist){
            return res.status(400)
            .json({message : "user with this email is present try to login..."})
        }

        //hashing password salting 5
        bcrypt.hash(password,10, async(err,result) =>{
            if(err) console.log(err.message);
            //update hash password to password filed
            const user = new USER({userName, email, password : result, role});
            await user.save();
            return res.status(201).json({message :"user registered successfully!!!", user : user})
        });   
    } catch (error) {
        console.log("error while getUserRegister request");
        res.json({message : error.message})  
    }
})

//login user user/login
userRoute.post("/login",async(req,res)=>{
    const {email, password} = req.body;
    try {
        //check user already login,register or not
        const existUser = await USER.findOne({email : email});
        if(!existUser) return res.status(400).json({message: "users does not exist please register"});

        //if user has register compare password check
        const isMatch = bcrypt.compareSync(password, existUser.password);

        //password not correct
        if(!isMatch) return res.status(400).json({message:'Invalid Credentials'});

        //password correct generate token 
        const token = jwt.sign({id: existUser._id, role : existUser.role} , process.env.JWT_SEACRET, {expiresIn : '1d'})
        console.log("login role:", existUser.role);
        //send response
        res.json({
            message :"user login successfully",
            user : {
              userName : existUser.userName,
              email:existUser.email,
              password : existUser.password,
              role : existUser.role,
              token : token
            }
        });
    } 
    catch (error) {
        console.log("error while getUserLogin request");
        res.json({message : error.message})
    }
})

//logout user/logout will not work 
userRoute.post("/logout",async(req,res)=>{
    if(req.headers.authorization===undefined){
        return res.send("token reqired");
    }
      let token=req.headers.authorization.split(" ")[1];
      console.log(token)
    try{
        req.session.destroy(async(err) => {
            if (err) {
              return res.status(500).send('Unable to log out');
            }
            const block=new BLOCK({blocklist:token})
            await block.save();
            res.send('User logged out');
          });
    }catch(err){
      console.log(err);
      res.json({message : error.message}) 
    }
})

//deleteUserById  user/:id
userRoute.delete("/:id",async(req,res)=>{
    const {id} = req.params;
    console.log(req.params);
    try {
       const deleteUser = await USER.findByIdAndDelete({_id: id});
       res.status(200).json({message : "user has been deleted successfully"})
    } catch (error) {
        console.log("error while deleting user by id");
        res.json({message : error.message}) 
    }
});


//getUserById  user/:id
userRoute.get("/:id",async(req,res)=>{
  const {id} = req.params;
  console.log(req.params);
  try {
     const user = await USER.findById({_id: id});
     res.status(200).json({message : "success", user:user})
  } catch (error) {
      console.log("error while detecting user by id not found");
      res.json({message : error.message}) 
  }
});



userRoute.post("/forgotPassword", async (req, res) => {
    const { email } = req.body;
    try {
      const user = await USER.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "User with this email does not exist" });
      }
  
      const otp = generateOTP();
      setOTP(email, otp);
  
      await sendEmail(email, 'Your Password Reset OTP', `Your OTP code is ${otp}`);
  
      res.status(200).json({ message: "OTP sent to email" });
    } catch (error) {
      console.log("Error while generating OTP:", error.message);
      res.status(500).json({ message: error.message });
    }
  });
  
  // Verify OTP
  userRoute.post("/verifyOTP", async (req, res) => {
    const { email, otp } = req.body;
     let newotp=Number(otp);
    try {
      const storedOTP = otpStore[email];
      if (!storedOTP || storedOTP.otp !== newotp || storedOTP.expiresAt < Date.now()) {
        return res.status(400).json({ message: 'Invalid or expired OTP' });
      }
  
      // OTP is correct, clear it from store
      delete otpStore[email];
      res.status(200).json({ message: "OTP verified successfully" });
    } catch (error) {
      console.log("Error while verifying OTP:", error.message);
      res.status(500).json({ message: error.message });
    }
  });
  
  // Reset password
  userRoute.post("/resetPassword", async (req, res) => {
    const { email, newPassword } = req.body;
    try {
      const user = await USER.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "User with this email does not exist" });
      }
  
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      user.password = hashedPassword;
      await user.save();
  
      res.status(200).json({ message: "Password reset successfully" });
    } catch (error) {
      console.log("Error while resetting password:", error.message);
      res.status(500).json({ message: error.message });
    }
  });
  