import express from 'express'
import nodemailer from 'nodemailer';
import { USER } from '../models/userSchema.js';
import  {BookingModel} from '../models/bookingModel.js';
import mongoose from 'mongoose';
import { sendEmail } from '../controllers/email.js';
import { Provider } from '../models/servideProviderSchema.js';
import { auth } from '../middlewares/auth.js';
const BookingRouter = express.Router();

// POST request to create a new booking
BookingRouter.post('/booking/add', auth(['Customer','Adopter']),async (req, res) => {
try {
    const { serviceId,bookedDateTime, cardNumber, upiId, paymentMethod, totalCharge } = req.body;
    const userId = req.user.id;
    const user = await USER.findById({_id:userId});
    const provider = await Provider.findById({_id:serviceId});
    // Create new booking
    const booking = new BookingModel({
      serviceId,
      userId : userId,
      bookedDateTime,
      cardNumber: paymentMethod === 'card' ? cardNumber : undefined,
      upiId: paymentMethod === 'upi' ? upiId : undefined,
      paymentMethod,
      totalCharge
    });

    await booking.save();

    // Send confirmation emails
    await sendEmail('shubhamkhangar45@gmail.com', 'Booking Confirmation', `Your booking for ${user.userName} on ${booking.bookedDateTime} has been confirmed.`);
    await sendEmail('shubhamkhangar45@gmail.com', 'Booking Confirmation', `Your booking for ${provider.name} on ${booking.bookedDateTime} has been confirmed.`);

    res.status(201).json({ message: 'Booking created successfully',booking:booking });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

//get service by id 
BookingRouter.get("/booking/:id",async(req,res)=>{
    const {id}=req.params;
     try{
        const booking=await BookingModel.findById({_id:id}); 
        res.status(201).send({bookings:booking})
     }catch(err){
        res.status(400).send(err.message);
     }
})

//get service by  
BookingRouter.get("/booking",async(req,res)=>{

   try{
      const booking=await BookingModel.find(); 
      res.status(200).send({bookings:booking})
   }catch(err){
      res.status(400).send(err.message);
   }
})

export default BookingRouter;