import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      // minlength: 3,
      // maxlength: 30,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // minlength: 3,
      // maxlength: 200,
    },
    password: {
      type: String,
      required: true,
      // minlength: 8,
      // maxlength: 1024,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;