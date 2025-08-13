import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ 
    message: 'MERN API is running!',
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString()
  });
});

// mongoose.connect("mongodb://localhost:27017/MERNDB")
mongoose.connect(process.env.MONGO_DB_URI).then(
  () => { console.log("Connected to MongoDB"); }
).catch(
  (err) => {console.log(err);}
);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});