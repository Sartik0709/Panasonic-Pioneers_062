import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  serviceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "serviceProvider", // Reference serviceProvider
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users", // Reference users (customer)
    required: true, // Assuming userId is required
  },
  bookedDateTime: {
    type: Date,
    required: true,
  },
  cardNumber: {
    type: String,
    required: function() { return this.paymentMethod === 'card'; }
  },
  upiId: {
    type: String,
    required: function() { return this.paymentMethod === 'upi'; }
  },
  paymentMethod: {
    type: String,
    enum: ["card", "upi"],
    required: true
  },
  totalCharge: {
    type: Number,
    required: true
  }
});

export const BookingModel = mongoose.model("Booking", bookingSchema);
