import express from 'express'
import {config} from 'dotenv'
import { connecttodb } from './src/config/db.js';
import { pet } from './src/routes/petRoute.js';
import { userRoute } from './src/routes/userRoute.js';
import cors from 'cors'
import { servicePRovider } from './src/routes/serviceProvider.js';
import { auth } from './src/middlewares/auth.js';



config();

const app=express();

app.use(express.json());

app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

app.use(cors())

const port=process.env.PORT||9090;

const uri=process.env.URI||null;

// app.use(session({
//     secret:process.env.JWT_SEACRET,
//     Store:MongoStore.create({
//         mongoUrl:uri,
//         collectionName:'session'
//     }),
//     resolve:false,
//     saveUninitialized:false,
//     Cookie:{
//         maxAge:1000*60*60
//     }
// }))

app.use("/user",userRoute);

app.use("",pet)

app.use("",servicePRovider)

app.listen(port,async()=>{
    try{
        await connecttodb(uri);
        console.log('database connected successfully')
        console.log(`server connected at the port number ${port}`);
    }catch(err){
        console.log(err);
    }
    
})

export default app;