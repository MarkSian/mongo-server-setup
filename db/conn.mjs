import express from 'express';
import dotenv from 'dotenv';

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