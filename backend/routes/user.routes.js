const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.routes");

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.post("/logout", userController.logout);
router.put("/update/:userId", userController.updateProfile);

// module.exports = router;
module.exports = router;
