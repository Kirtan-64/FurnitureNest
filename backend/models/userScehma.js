const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  console.log("Generating token for user:", user._id);

  const token = jwt.sign(
    { _id: user._id.toString() },
    process.env.ACCESS_TOKEN_SECRET
  );

  user.tokens = user.tokens.concat({ token });
  await user.save();

  return token;
};

userSchema.pre("save", async function (next) {
  try {
    if (this.isModified("password")) {
      console.log("Hashing password for user:", this.email);
      this.password = await bcrypt.hash(this.password, 10);
    }
    next();
  } catch (error) {
    console.log("Error in hashing password:", error);
    next(error);
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
