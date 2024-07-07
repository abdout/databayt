import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  phone: String,
  facebook: String,
  whatsapp: String,
});

const memberSchema = new Schema(
  {
    userId: { type: String, required: true }, // Link to User.id
    name: String,
    dob: String,
    address: String,
    gender: String,
    rank: String,
    interest: String,
    skill: String,
    club: String,
    image: String,
    contact: contactSchema,
  },
  {
    timestamps: true,
  }
);

const Member = mongoose.models.Member || mongoose.model("Member", memberSchema);

export default Member;