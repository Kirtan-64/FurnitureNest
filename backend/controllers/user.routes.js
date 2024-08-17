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
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).send("Login Failed: User not found");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(402).send("Login Failed: Incorrect password");
    }

    const token = await user.generateAuthToken();

    // Set the token in a cookie
    res.cookie("auth_token", token, {
      httpOnly: true, // Prevents JavaScript from accessing the cookie
      secure: process.env.NODE_ENV === "production", // Ensures cookie is sent over HTTPS in production
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    });

    res.send({
      user,
      token,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
// await user.save();
const getProfile = async (req, res) => {
  res.send(req.user);
};

const logout = async (req, res) => {
  try {
    req.user.tokens = [];

    // Save the user to ensure the tokens are cleared
    await req.user.save();

    // Clear the cookie by setting an expired date
    res.clearCookie("auth_token", { path: "/" });

    // Delete the user from the database
    await req.user.deleteOne();

    res.send({
      message:
        "Successfully logged out from all sessions, cleared the cookie, and deleted the user account.",
    });
  } catch (error) {
    res
      .status(500)
      .send({ error: "Failed to log out and delete user account." });
  }
};

const updateProfile = async (req, res) => {
  try {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["name", "password", "address", "phone"];
    const operate = updates.every((update) => allowedUpdates.includes(update));
    if (!operate) {
      return res.status(400).send("Invalid Updates");
    }
    updates.forEach((update) => (req.user[update] = req.body[update]));
    if (req.body.password) {
      req.user.password = await bcrypt.hash(req.body.password, 10);
    }
    await req.user.save();
    res.send(req.user);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  registerUser,
  loginUser,
  logout,
  getProfile,
  updateProfile,
};
