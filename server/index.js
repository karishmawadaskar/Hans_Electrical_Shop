import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import { postLogin, postSignup } from "./controllers/user.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        if (conn) {
            console.log(`MongoDB connected successfully`);
        }
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
};

// Auth
app.post("/signup", postSignup);
app.post("/login", postLogin);

// Health check route
app.get("/health", (req, res) => {
    res.json({
        success: true,
        message: "Server is running"
    });
});





// Start server
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    connectDB();
});