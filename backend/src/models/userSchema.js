import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    userName: {type: String, require: true },
    email: {type: String, require: true },
    password: {type: String, require: true },
    role: {type: String, enum: ["Adopter","Admin","PetCareProvider","Shelter","Rescue","Customer"], require: true, default: "Adopter"}
  },
  {
    collection: "users"
  }
);

export const USER = model("users", userSchema);
