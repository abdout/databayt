import mongoose, { Schema } from "mongoose";

const paperSchema = new Schema(
  {
    title: String,
    desc: String,
    body: String,
    image: String,
    author: String,
    slug: String,
    catSlug: String,
  },
  {
    timestamps: true,
  }
);

const Paper = mongoose.models.Article || mongoose.model("Paper", paperSchema);

export default Paper;