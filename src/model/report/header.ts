// MongoDB schema
import mongoose, { Schema } from "mongoose";

const headerSchema = new Schema(
  {
    customer: String,
    consultant: String,
    client: String,
    description: String,
    projectName: String,
    date: String,
    location: String,
    tag: String,
    sheet: String,
  },
  {
    timestamps: true,
  }
);

const Header = mongoose.models.Header || mongoose.model("Header", headerSchema);

export default Header;