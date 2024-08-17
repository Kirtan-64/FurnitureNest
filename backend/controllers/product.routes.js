const Product = require("../models/productSchema");
const mongoose = require("mongoose");

const createProduct = async (req, res) => {
  try {
    const product = new Product({
      ...req.body,
      images: req.files.map((file) => file.path),
    });
    await product.save();
    res.status(201).json({ message: "Product created successfully" });
  } catch (error) {
    res.status(400).json({ message: "Failed to create product" });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = Product.find({});
    res.status(200).send(products);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

const getProductByID = async (req, res) => {
  try {
    const productId = req.params.id;

    // Validate if `productId` is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ error: "Invalid product ID" });
    }

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const updates = Object.keys(req.body);
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404).send();
    }
    updates.forEach((update) => (product[update] = req.body[update]));
    product.images = req.files.map((file) => file.path);
    await product.save();
    res.status(200).send(product);
  } catch (error) {
    res.status(404).send(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      res.status(404).send();
    }
    res.status(200).send(product);
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  deleteProduct,
  updateProduct,
  getProductByID,
};
