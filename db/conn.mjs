import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const connectionStr = process.env.MONGO_URI || '';

async function connectDB() {
    try {
        await mongoose.connect(connectionStr);
        console.log('MongoDB connected successfully');

    } catch (err) {
        console.error('MongoDB connection error:', err);
    }
}

export default connectDB;   