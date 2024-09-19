const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order.route");

router.put("/:orderId/status", orderController.updateOrderStatus);
router.get("/user/:userId", orderController.getOrdersByUser);
router.delete("/:orderId", orderController.deleteOrder);
router.post("/create", orderController.createOrder);

module.exports = router;
