import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/conn.mjs';


// Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes


// Error handling
app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
});

// Listeners
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);