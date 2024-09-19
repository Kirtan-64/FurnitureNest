const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/userScehma");

const registerUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({
      user,
      token,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Attempting to log in user with email:", email);

    const user = await User.findOne({ email });
    if (!user) {
      console.log("Login failed: User not found");
      return res.status(400).send("Login Failed: User not found");
    }

    console.log("User found:", user);

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Login failed: Incorrect password");
      return res.status(402).send("Login Failed: Incorrect password");
    }

    const token = await user.generateAuthToken();
    console.log("Token generated:", token);

    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    });

    res.send({ user, token });
  } catch (error) {
    console.log("Login error:", error);
    res.status(500).send("Login failed due to server error");
  }
};

const logout = async (req, res) => {
  try {
    // Find and delete the user from the database
    await User.findByIdAndDelete(req.user._id);

    // Clear the authentication cookie (if used)
    res.clearCookie("accessToken", { path: "/" });

    return res.status(200).json({
      message: "User removed and logged out successfully.",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Logout failed",
      success: false,
    });
  }
};

const updateProfile = async (req, res) => {
  try {
    // Log the user to see if it exists
    console.log("Current user:", req.user);

    if (!req.user) {
      return res.status(400).send("User not authenticated.");
    }

    const updates = Object.keys(req.body);
    console.log("Updates:", updates);

    if (updates.length === 0) {
      return res.status(400).send("No updates provided");
    }

    const allowedUpdates = ["name", "password", "address", "phone"];
    const isValidOperation = updates.every((update) =>
      allowedUpdates.includes(update)
    );

    if (!isValidOperation) {
      return res.status(400).send("Invalid updates");
    }

    // Apply updates to user
    updates.forEach((update) => (req.user[update] = req.body[update]));

    // If updating password, hash it
    if (req.body.password) {
      req.user.password = await bcrypt.hash(req.body.password, 10);
    }

    await req.user.save();
    res.send(req.user);
  } catch (error) {
    console.error("Error in updateProfile:", error); // Log the error
    res.status(400).send(error);
  }
};

module.exports = {
  registerUser,
  loginUser,
  logout,
  updateProfile,
};
