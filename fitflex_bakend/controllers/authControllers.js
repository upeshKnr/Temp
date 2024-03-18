// const test = (req, res) =>{
//     res.json('test is working')
// }

// module.exports ={
//     test
// }

const User = require("../models/user"); 
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  try {
    const { fullName, username, email, phoneNumber, password, gender } =
      req.body;

    // Check if the user already exists by email or username
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });

    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user with the hashed password
    const user = new User({
      fullName,
      username,
      email,
      phoneNumber,
      password: hashedPassword,
      gender,
    });

    // Save the user to the database
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to register user" });
  }
};

module.exports = {
  registerUser,
};
