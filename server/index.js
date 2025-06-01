import express from 'express';
import mongoose from 'mongoose'; 
import dotenv from 'dotenv';
import cors from 'cors';
import axios from 'axios';

dotenv.config();
const app=express();
app.use(cors());
app.use(express.json());
console.log("MONGO_URI:", process.env.MONGO_URI);

//connect to mongoose
const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        if (conn) {
            console.log(`MongoDB connected successfully`);
        }
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1); // Exit the process if connection fails
    }
};

app.get("/:health",(req, res)=>{
    res.json({
        success:true,
        message:"Server is running"
    })
});



const PORT = process.env.PORT|| 5002;

app.listen(PORT,()=>{
   console.log(`Server is running on ${PORT}`)
   connectDB();
});