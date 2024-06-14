import Router from 'express';
import { Provider } from '../models/servideProviderSchema.js';
import { USER } from '../models/userSchema.js';

export const servicePRovider=Router();
//get all services
servicePRovider.get("/service/all",async(req,res)=>{
   //  const {id}=req.user;
   //  console.log(id)
   //  const {name,services,price_hour,description,rating}=req.body
     try{
        const provider=await Provider.find(); 
        res.status(201).send({provider:provider})
     }catch(err){
        res.status(400).send(err.message);
     }
})

//book service
servicePRovider.post("/service/add",async(req,res)=>{
   //  const {id}=req.user;
   //  console.log(id)
    const {name ,services,price_hour,description,rating}=req.body
     try{
      //   const exuser=await USER.findOne({_id:id}); 
      //   console.log(exuser)
        const provider= new Provider({name ,services,price_hour,description,rating});
        await provider.save();
        res.status(201).send(provider)
     }catch(err){
        res.status(400).send(err.message);
     }
})