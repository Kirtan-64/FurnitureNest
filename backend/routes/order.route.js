const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order.route");

router.post("/create", orderController.createOrder);
router.get("/user/:userId", orderController.getOrdersByUser);

module.exports = router;
