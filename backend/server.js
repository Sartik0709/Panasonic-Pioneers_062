import express from 'express';
import { config } from 'dotenv';
import { connecttodb } from './src/config/db.js';
import { pet } from './src/routes/petRoute.js';
import { userRoute } from './src/routes/userRoute.js';
import cors from 'cors';
import { servicePRovider } from './src/routes/serviceProvider.js';
import { auth } from './src/middlewares/auth.js';
import BookingRouter from './src/routes/bookingRouter.js';
import path from 'path';
import fs from 'fs';


config();

const app = express();

app.use(express.json());

// Ensure the 'uploads' directory exists
const uploadsDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(uploadsDir));

app.use(cors());

const port = process.env.PORT || 9090;
const uri = process.env.URI || null;

app.use("/user", userRoute);
app.use("", pet);
app.use("", servicePRovider);


app.use("",BookingRouter);

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
