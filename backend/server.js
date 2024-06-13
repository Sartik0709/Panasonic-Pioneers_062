import express from 'express';
import {config} from 'dotenv'
import connectToDB from './src/configs/db.js';
import  userRouter  from './src/routers/userRouter.js';
import petRouter from './src/routers/petRouter.js';
import auth from './src/middlewares/auth.js';
import cors from 'cors'

// import mongoose from 'mongoose';
config();

const app = express();
const port = process.env.PORT || 3100 ;
const url = process.env.URL || null

// console.log(url);
app.use(express.json());
app.use(cors({
    origin:true,
    credentials:true
}));

app.get('/home', (req,res) =>{
    console.log("home  route");
    res.status(200).json("This is Home Route")
})

//userRouter
app.use('/user',userRouter);

//petRouter
app.use('/pets',auth, petRouter);


app.listen(port,async()=>{
try {
    await connectToDB(url);
    // await mongoose.connect(url)
    console.log(`Server Running On Port : ${port}`);
} catch (error) {
    console.log("error while connecting port :", error);
}
})