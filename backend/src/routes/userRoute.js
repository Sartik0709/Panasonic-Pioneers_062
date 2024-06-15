import { Router } from "express";
import bcrypt, { hash } from 'bcrypt';
import  jwt from 'jsonwebtoken'
import { config } from "dotenv";
import { USER } from "../models/userSchema.js";
import { BLOCK } from "../models/blocklist.js";

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
            return res.status(201).json({message :"user registered successfully", user : user})
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
            token : token,
            user : existUser
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