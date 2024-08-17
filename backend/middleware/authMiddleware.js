const jwt = require("jsonwebtoken");
const User = require("../models/userScehma");

const auth = async (req, res, next) => {
  try {
    console.log("Auth Middleware: Working");

    let token = req.header("Authorization");

    if (token) {
      token = token.replace("Bearer ", "");
    } else if (req.cookies.auth_token) {
      token = req.cookies.auth_token;
    }

    if (!token) {
      return res.status(401).send({ error: "No token provided." });
    }

    console.log("Token:", token);
    console.log(process.env.ACCESS_TOKEN_SECRET);

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    console.log("Decoded ID:", decoded._id);

    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    if (!user) {
      console.log("User not found or token is invalid.");
      throw new Error();
    }

    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    console.log("Authentication error:", error);
    res.status(401).send({ error: "Please authenticate." });
  }
};

module.exports = auth;
