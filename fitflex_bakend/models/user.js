const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true, // Ensure usernames are unique
  },
  email: {  
    type: String,
    required: true,
    unique: true, // Ensure emails are unique
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"], // Define the allowed genders
    required: true,
  },
});

// Create a User model from the schema
const User = mongoose.model("User", userSchema);

module.exports = User;
