import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  const uri: string = process.env.MONGODB_URI as string;
  if (!uri) {
    throw new Error("Please define the MONGODB_URI environment variable");
  }

  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;