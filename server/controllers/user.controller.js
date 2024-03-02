const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findByEmail(email);
    if (existingUser) {
      console.log("User Already Exists.");
      return res
        .status(400)
        .json({ message: "User with this email already exists", type: false });
    }
    const newUser = await User.create(name, email, password);
    res.status(201).json({ message: "Sign Up Was Successfull", type: true });
    console.log("user created-server");
  } catch (err) {
    console.error("Error creating user:" + err);
    res.status(500).json({ message: "Internal server error", type: false });
  }
};
const signInUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findByEmail(email);
    if (!existingUser) {
      return res
        .status(400)
        .json({ message: "Email not found, Register Now", type: false });
    }
    console.log(existingUser.hashed_password);
    const isAuthenticated = User.authenticate(
      password.toString(),
      existingUser.salt,
      existingUser.hashed_password
    );
    if (!isAuthenticated) {
      return res.status(400).json({ message: "Wrong Password", type: false });
    }
    const token = jwt.sign(
      { userId: existingUser.id },
      process.env.SECRET_KEY,
      { expiresIn: "20m" }
    );

    return res
      .status(200)
      .json({
        token,
        expiresIn: "20m",
        message: "Login successful",
        type: true,
      });
  } catch (err) {
    console.error("Error signing in user:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { createUser, signInUser };
