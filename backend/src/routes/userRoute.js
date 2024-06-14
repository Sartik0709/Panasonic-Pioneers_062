import { Router } from "express";
import bcrypt, { hash } from 'bcrypt';
import  jwt from 'jsonwebtoken'
import { config } from "dotenv";
import { USER } from "../models/userSchema.js";
import { BLOCK } from "../models/blocklist.js";

config();

export const userRoute=Router();

//get all users user/get
userRoute.get("/get",async(req,res)=>{
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
   try{
      const exuser=await USER.findOne({email});
      if(exuser){
        return res.status(302).send("User already register try to login")
      }
      const exusername=await USER.findOne({userName});
      if(exusername){
       return res.status(302).send("User name exists try to give another name")
      }
      else{
          bcrypt.hash(password,10,async(err,result)=>{
            if(err)console.log(err);
            const user=new USER({userName,email,password:result,role});
            await user.save()
           return  res.status(201).json({"message":"user registered successfully"})
          })
      }
   }
   catch(err){
    console.log(err);
    res.json({message : err.message})  
   }
})

//login user user/login
userRoute.post("/login",async(req,res)=>{
    let{email,password}=req.body;
    try{
        const exuser=await USER.findOne({email});
        if(!exuser){
            return res.status(401).json({"message":"User not found"})
        }
        const payload={id:exuser._id,email:exuser.email,role:exuser.role};
        bcrypt.compare(password,exuser.password,(err,result)=>{
            if(err)console.log(err);
            if(!result){
               return res.status(203).json({"message":"wrong credential"});
            }
            jwt.sign(payload,process.env.JWT_SEACRET,(err,token)=>{
                if(err){console.log(err);}
                else{
                    res.status(200).json({
                        message :"Login Successfully",
                        token:token,
                        user : exuser
                    });
                }
            });
        });
    }catch(error){
        console.log("error while getUserLogin request");
        res.json({message : error.message})
    }
})

//logout user/logout
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
