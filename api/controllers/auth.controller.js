import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

const signup = async (req, res, next) => {
  const { userName, email, password } = req.body;
  if (!userName || !email || !password || userName === "" || email === "" || password === "") {
    return res.status(400).json({ message: "All fields are required and cannot be empty" });
  }

  const hashedPassword = bcryptjs.hashSync(password, 12);

  const newuser = new User({ userName, email, password: hashedPassword });

  try {
    await newuser.save();
    res.status(201).json("User created successfully");
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

const login = (req, res, next) => {
  res.json({
    message: "Login route",
    timestamp: new Date().toISOString()
  });
};

const refreshToken = (req, res, next) => {
  res.json({
    message: "Refresh token route",
    timestamp: new Date().toISOString()
  });
};

const logout = (req, res, next) => {
  res.json({
    message: "Logout route",
    timestamp: new Date().toISOString()
  });
};

const forgotPassword = (req, res, next) => {
  res.json({
    message: "Forgot password route",
    timestamp: new Date().toISOString()
  });
};

const resetPassword = (req, res, next) => {
  res.json({
    message: "Reset password route",
    timestamp: new Date().toISOString()
  });
};

export { signup, login, refreshToken, logout, forgotPassword, resetPassword };