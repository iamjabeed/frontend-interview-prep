import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/auth");
    console.log("DB connected👍");
  } catch (error) {
    console.log(error?.message || error);
    process.exit(1);
  }
};

export default connectDB;
