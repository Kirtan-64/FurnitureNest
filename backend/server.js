require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/userScehma");
const app = express();

const port = process.env.PORT || 8000;

// Middleware to parse JSON
app.use(express.json());

// MongoDB connection
const uri = process.env.MONGODB_URL || "mongodb://localhost:27017/yourdbname";
//  console.log("MongoDB URI:", process.env.MONGODB_URL);

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log("err", err));

// Example route to test user creation
app.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
