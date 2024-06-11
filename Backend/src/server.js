import express from 'express'
import { config } from 'dotenv'
import connectToDB from './config/database.js';
 config();

 const Port = process.env.PORT || 9090
 const dburl=process.env.DB_URI || null

 const app= express();

 
 app.get('/',(req, res)=>{
    res.send('This is out home Route')
 })


 app.listen(Port,async()=>{
    try {
        //connect to mongodb database
        await connectToDB(dburl)
        console.log("server is running on port");
        // console.log(dburl);
    } catch (error) {
        console.log(error);
    }
 })