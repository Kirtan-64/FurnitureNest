const Order = require("../models/orderSchema");
const Product = require("../models/productSchema");

// Create an order (rent or sale)
const createOrder = async (req, res) => {
  try {
    const { productId, userId, quantity, type } = req.body;

    // Get the product
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Check if the product is available
    if (!product.available) {
      return res.status(400).json({ error: "Product is not available" });
    }

    // Calculate total amount based on type (Rent or Sale)
    let totalAmount = product.price * quantity;
    if (type === "Rent") {
      // Add custom rent logic here, e.g., rent duration, fees, etc.
      totalAmount = product.price * 0.1 * quantity; // Example: 10% of sale price per day (adjust as needed)
    }

    // Create an order
    const order = new Order({
      user: userId,
      product: productId,
      quantity,
      totalAmount,
      type,
      status: "Pending",
    });

    await order.save();

    // Mark the product as unavailable if it's a sale
    if (type === "Sale") {
      product.available = false;
      await product.save();
    }

    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all orders for a specific user
const getOrdersByUser = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.params.userId }).populate(
      "product"
    );
    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createOrder,
  getOrdersByUser,
};
