import { Schema, model } from "mongoose";

const providerSchema = new Schema(
{
  userId: { type: Schema.Types.ObjectId, ref: 'users' },
  name: { type: String, required: true,ref: 'users' },
  services: { type: String, enum:['pet_midication', 'pet_walking', 'pet_sitting', 'pet_grooming'],  require:true},
  price_hour: { type: Number, required: true },
  description: { type: String ,require:true},
  rating:{type:Number},
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
},
{
    versionKey:false
});

export const Provider = model('serviceProvider', providerSchema);
