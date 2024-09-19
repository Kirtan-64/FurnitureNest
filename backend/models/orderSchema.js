const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  orderType: {
    type: String,
    enum: ["rent", "sale"],
    required: true,
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
  returnDate: {
    type: Date,
    required: function () {
      return this.orderType === "rent";
    },
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "completed", "cancelled", "in-progress"],
    default: "pending",
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
