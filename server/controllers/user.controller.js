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
      console.log("signin user not found");
      return res
        .status(400)
        .json({ message: "Email not found, Register Now", type: false });
    }
    const isAuthenticated = User.authenticate(
      password.toString(),
      existingUser.salt,
      existingUser.hashed_password
    );
    if (!isAuthenticated) {
      console.log("signin wrong passwordd");
      return res.status(400).json({ message: "Wrong Password", type: false });
    }
    const token = jwt.sign(
      { userId: existingUser.id },
      process.env.SECRET_KEY,
      { expiresIn: "20d" }
    );
    console.log(existingUser.id);
    return res.status(200).json({
      token,
      userId: existingUser.id,
      expiresIn: "20d",
      message: "Login successful",
      type: true,
    });
  } catch (err) {
    console.error("Error signing in user:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
const changePassword = async (req, res) => {
  console.log(req.body);
  const { email, lastPassword, newPassword } = req.body;
  const existingUser = await User.findByEmail(email);
  if (!existingUser) {
    console.log("signin user not found");
    return res
      .status(400)
      .json({ message: "Email not found, Try Again", type: false });
  }
  console.log('!!userfound')
  const isAuthenticated = User.authenticate(
    lastPassword.toString(),
    existingUser.salt,
    existingUser.hashed_password
  );
  if (!isAuthenticated) {
    console.log("signin wrong passwordd");
    return res.status(400).json({ message: "Wrong Password", type: false });
  }
  console.log('!!user Authenticated')
  try {
    await User.updateUserPassword(newPassword, existingUser.email);
    return res.status(201).json({
      message: "Password Changed, Login With New Password Next Time",
      type: true,
    });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", type: false });
    console.log(err);
  }
};
module.exports = { createUser, signInUser, changePassword };
