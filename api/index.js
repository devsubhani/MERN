import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Add timeout middleware
app.use((req, res, next) => {
  // Set timeout to 30 seconds
  req.setTimeout(30000);
  res.setTimeout(30000);
  next();
});

// mongoose.connect("mongodb://localhost:27017/MERNDB")
mongoose.connect(process.env.MONGO_DB_URI).then(
  () => { console.log("Connected to MongoDB"); }
).catch(
  (err) => {console.log(err);}
);

const PORT = process.env.PORT || 4000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Server accessible at: http://localhost:${PORT}`);
  console.log(`Network accessible at: http://0.0.0.0:${PORT}`);
});

// Routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ 
    message: 'MERN API is running!',
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString()
  });
});