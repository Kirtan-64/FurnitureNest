const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  type: {
    // enum type
    type: String,
    enum: ["Sale", "Rent"],
    default: "Sale",
    required: true,
  },
  image: {
    type: String,
  },
  Price: {
    type: Number,
  },
  available: {
    type: Boolean,
    default: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Product = mongoose.model("Product", productSchema);
// export
module.exports = Product;
