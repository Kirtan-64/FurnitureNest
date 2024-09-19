const express = require("express");
const router = express.Router();
const authmiddleware = require("../middleware/authMiddleware");
const userController = require("../controllers/user.routes");

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.post("/logout", authmiddleware, userController.logout);
router.patch("/update", authmiddleware, userController.updateProfile);

// module.exports = router;
module.exports = router;
