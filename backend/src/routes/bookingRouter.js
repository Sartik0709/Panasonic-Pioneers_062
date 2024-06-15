import express from 'express'
import nodemailer from 'nodemailer';
import { Provider } from '../models/servideProviderSchema.js';
import { USER } from '../models/userSchema.js';
import  {BookingModel} from '../models/bookingModel.js';
const BookingRouter = express.Router();
// POST request to create a new booking
BookingRouter.post('/booking/add', async (req, res) => {
  try {
    const { serviceId, userId, bookedDateTime } = req.body;

    // Create new booking
    const booking = new BookingModel({
      service: serviceId,
      user: userId,
      bookedDateTime
    });

    await booking.save();

    // Send confirmation emails
    await sendBookingConfirmationEmails(booking);

    res.status(201).json({ message: 'Booking created successfully', booking : booking});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Function to send booking confirmation emails
async function sendBookingConfirmationEmails(booking) {
  try {
    // Fetch service provider's email (assuming you have a User model with email field)
    const provider = await Provider.findById({_id :booking.service}); // Replace with your actual User model query

    // Fetch user's email (customer's email)
    const user = await USER.findById({_id: booking.user}); // Replace with your actual User model query

    // Nodemailer setup (SMTP configuration)
    let transporter = nodemailer.createTransport({
      host: 'smtp.example.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'your_email@example.com',
        pass: 'your_email_password'
      }
    });

    // Email content
    let mailOptions = {
      from: "petpals@gmai.com",
      to: [user.email,provider.name],
      subject: 'Booking Confirmation',
      text: `Dear ${provider.name},\n\nYou have a new booking scheduled for ${booking.bookedDateTime}.\n\nRegards,\nYour PetPals App`
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Booking confirmation emails sent successfully.');
  } catch (error) {
    console.error('Error sending booking confirmation emails:', error);
  }
}

export default BookingRouter;