import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    const mongoURI = process.env.MONGO_URI;

    if (!mongoURI) {
      throw new Error("MONGO_URI is not defined in your .env file");
    }

    console.log("Connecting to MongoDB....!");

    await mongoose.connect(mongoURI);

    console.log("MongoDB is connected successfully!!!");
  } catch (e: any) {
    console.error("MognoDB connection failed!!!", e.message);
  }
};

export default connectDB;
