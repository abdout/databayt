import mongoose, { Schema } from "mongoose";

const kitSchema = new Schema(
  {
    equipment: String,
    serial: String,
    date: String,
    equipment1: String,
    serial1: String,
    date1: String,
    equipment2: String,
    serial2: String,
    date2: String,
    equipment3: String,
    serial3: String,
    date3: String,
  },
  {
    timestamps: true,
  }
);

const Kit = mongoose.models.Kit || mongoose.model("Kit", kitSchema);

export default Kit;