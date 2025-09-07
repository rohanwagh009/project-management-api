import mongoose from "mongoose";

const connectDB = async () => {
  try {
     await mongoose.connect(process.env.MONGO_URI);
     console.log("MongoDB connected");
     
  }catch (error) {
    console.error("MongoDb conncetion error", error);
    process.exit(1);
    
  }
}

export default connectDB


// Exit Code 1 (or any non-zero number): Means the process exited because an error occurred. It signals to the operating system or any process manager (like PM2 or Docker) that the application terminated due to a failure.
