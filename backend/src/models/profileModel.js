import { Schema, model } from "mongoose";

const profileSchema = new Schema(
{
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  profilePicture: { type: String },
  contactDetails: { type: String },
  additionalInfo: { type: Schema.Types.Mixed },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
},
{
    versionKey:false
}
);

export const profileModel = model('Profile', profileSchema);
