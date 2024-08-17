const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.routes");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.post("/logout", authMiddleware, userController.logout);
router.patch("/update", authMiddleware, userController.updateProfile);

module.exports = router;
