import mongoose from 'mongoose';

export const connectDB = async () => {
    try { await mongoose.connect("mongodb+srv://adityagandi11_db_user:sXS7fa1xAz0BWPvj@cluster0.okabzwy.mongodb.net/?appName=Cluster0")
    console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("MongoDB connection failed:", error);
    }
}