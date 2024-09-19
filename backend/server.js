require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/userScehma");
const { StatusCodes } = require("http-status-codes");
const productRoutes = require("./routes/product.route");
const userroutes = require("./routes/user.routes");
const cookieParser = require("cookie-parser");
const orderroutes = require("./routes/order.route");
const app = express();

app.use(express.json());
app.use("/products", productRoutes);
app.use("/", userroutes);
app.use("/order", orderroutes);
app.use(cookieParser());
const port = process.env.PORT || 8000;

const uri = process.env.MONGODB_URL || "mongodb://localhost:27017/yourdbname";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Example route to test user creation
app.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    const token = await user.generateAuthToken();
    res.status(StatusCodes.CREATED).send({ user, token });
  } catch (error) {
    console.error("Error saving user:", error);
    if (error.name === "ValidationError") {
      res.status(StatusCodes.BAD_REQUEST).send({ message: error.message });
    } else {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .send({ message: "Internal server error" });
    }
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
