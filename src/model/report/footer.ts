// MongoDB schema
import mongoose, { Schema } from "mongoose";

const footerSchema = new Schema(
  {
    contractor: String,
    customer: String,
    consultant: String,
    contractorName: String,
    customerName: String,
    consultantName: String,
    contractorSignature: String,
    customerSignature: String,
    consultantSignature: String,
  },
  {
    timestamps: true,
  }
);

const Footer = mongoose.models.Footer || mongoose.model("Footer", footerSchema);

export default Footer;
