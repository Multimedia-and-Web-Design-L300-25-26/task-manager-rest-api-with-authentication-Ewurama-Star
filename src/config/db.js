import mongoose from "mongoose";

const connectDB = async () => {
  try {

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");
  } 
  catch (error) {
    console.error("Database connection failed:\n", error);
    console.error("MONGO_URI present:", Boolean(process.env.MONGO_URI));
    process.exit(1);
  }
};

export default connectDB;