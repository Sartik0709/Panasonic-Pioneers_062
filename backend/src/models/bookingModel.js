import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service", // Reference to Service model
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to User model (customer)
    required: true,
  },
  provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to User model (service provider)
  },
  bookedAt: {
    type: Date,
    default: Date.now,
  },
  bookedDateTime: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "confirmed", "cancelled"],
    default: "confirmed",
  },
});

export const BookingModel = mongoose.model("Booking", bookingSchema);
