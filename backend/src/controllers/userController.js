import { userModel } from "../models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

// export const userRegister = async(req, res) => {
//     const {name , email , password ,role} = req.body;
//   try {
// //    step1:- check user already register
//       const existUser =  userModel.findOne({email});
//       if(existUser) {
//         return res.status(400).json("User Already Register Can Try Login")
//       }
// //    step2:- hash password
//       bcrypt.hash(password, 10, async(err,result)=>{
//         const user = new userModel({name,email,password:result,role});
//         await user.save();
//         res.status(200).json("New User Register Successfully :", user);
//       })
//   } 
//   catch (error) {
//       console.log("error :", error.message);
//       res.status(500).json("Cant Register :",error.message)
//   }
// };


// export const userLogin = async(req,res)=>{
//     const {email,password} = req.body;
//     try {
//         //step1:- check user register by email
//         const userExist = await userModel.findOne({email});
//         if(!userExist){
//             return res.status(400).json("User Is Not Registered!!!")
//         }

//         //step2: compare password
//         const isMatch = bcrypt.compareSync(password, userExist.password);
//         if(!isMatch){
//             return res.status(500).json("Invalid Password...")
//         }

//         //step3: jwt token generate
//         const token = jwt.sign({id:userExist._id, role: userExist.role},  process.env.JWT_KEY ,{expiresIn:'3h'});

//         res.status(200).json({
//             message : "Login Successfully",
//             user : userExist,
//             token : token
//         })
  
//     } catch (error) {
//         console.log("error :", error.message);
//       res.status(500).json("Cant Login :",error.message)
//     }
// }



export const getAllUser= async(req,res)=>{
    try {
        const users =await userModel.find();
        res.status(200).send(users)
    } catch (error) {
        console.log("error while getAllUsers request");
        res.send("error :" ,error.message)
    }
}


//register
export const userRegister= async(req,res)=>{
    const {name, email, password ,role} = req.body;
    try {
        //check user already register or not
        const userExist = await userModel.findOne({email : email})
        if(userExist){
            return res.status(400)
            .json({message : "user with this email is present try to login..."})
        }

        //hashing password salting 5
        bcrypt.hash(password,10, async(err,result) =>{
            if(err) console.log(err.message);
            //update hash password to password filed
            const user = new userModel({name, email, password : result, role});
            await user.save();
            return res.status(201).json({message :"user registered successfully", user : user})
        });   
    } catch (error) {
        console.log("error while getUserRegister request");
        res.json({message : error.message})  
    }
}

//login
export const userLogin = async(req,res) =>{
    const {email, password} = req.body;
    try {
        //check user already login,register or not
        const existUser = await userModel.findOne({email : email});
        if(!existUser) return res.status(400).json({message: "users does not exist please register"});

        //if user has register compare password check
        const isMatch = bcrypt.compareSync(password, existUser.password);

        //password not correct
        if(!isMatch) return res.status(400).json({message:'Invalid Credentials'});

        //password correct generate token 
        const token = jwt.sign({id: existUser._id, role : existUser.role} , process.env.JWT_KEY, {expiresIn : '1h'})
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
}

//delete users fin and delete by id
export const deleteUser = async(req,res)=>{
    const {id} = req.params;
    console.log(req.params);
    try {
       const deleteUser = await userModel.findByIdAndDelete({_id: id});
       res.status(200).json({message : "user has been deleted successfully"})
    } catch (error) {
        console.log("error while deleting user by id");
        res.json({message : error.message}) 
    }
}
