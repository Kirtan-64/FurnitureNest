const jwt = require("jsonwebtoken");
const User = require("../models/userScehma");

const auth = async (req, res, next) => {
  try {
    // Check if the Authorization header is provided
    const authHeader = req.header("Authorization");
    if (!authHeader) {
      return res
        .status(401)
        .json({ error: "No token provided. Please authenticate." });
    }

    // Extract the token from the Authorization header
    const token = authHeader.replace("Bearer ", "");

    // Verify the token and decode the payload
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    // Find the user by the decoded _id and token in the tokens array
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    // If no user is found, throw an error
    if (!user) {
      throw new Error(
        "User not found with this token. Please authenticate again."
      );
    }

    // Attach the token and user to the request object
    req.token = token;
    req.user = user;

    // Continue to the next middleware or route handler
    next();
  } catch (error) {
    // Handle different error scenarios
    if (error.name === "JsonWebTokenError") {
      return res
        .status(401)
        .json({ error: "Invalid token. Please authenticate again." });
    } else if (error.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({ error: "Token expired. Please log in again." });
    }

    // Catch any other errors
    res.status(401).send({ error: "Please authenticate." });
  }
};

module.exports = auth;
