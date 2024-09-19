const Order = require("../models/orderSchema");
const Product = require("../models/productSchema");

// Create an order (rent or sale)
const createOrder = async (req, res) => {
  try {
    const { productId, userId, quantity, orderType, returnDate } = req.body;

    // Fetch the product
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Check if the product is available for sale or rent
    if (!product.available) {
      return res.status(400).json({ error: "Product is not available" });
    }

    // Calculate total price based on order type
    let totalPrice = product.price * quantity;
    if (orderType === "rent") {
      if (!returnDate) {
        return res
          .status(400)
          .json({ error: "Return date is required for rent orders." });
      }
      // Assume rent cost is a percentage of the sale price per day
      const rentDuration = Math.ceil(
        (new Date(returnDate) - Date.now()) / (1000 * 60 * 60 * 24)
      );
      totalPrice = product.price * 0.1 * rentDuration * quantity;
    }

    // Create the order
    const order = new Order({
      user: userId,
      product: productId,
      orderType,
      returnDate: orderType === "rent" ? returnDate : null,
      totalPrice,
      status: "pending",
    });

    await order.save();

    // Update product availability only for sales
    if (orderType === "sale") {
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

// Update order status (e.g., complete, cancel)
const updateOrderStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    const order = await Order.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.orderId);

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createOrder,
  getOrdersByUser,
  updateOrderStatus,
  deleteOrder,
};
