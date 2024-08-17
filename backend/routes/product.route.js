const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const productController = require("../controllers/product.routes");

const upload = require("../middleware/multer");
router.post("/", upload.array("images", 5), productController.createProduct);
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductByID);
router.put("/:id", upload.array("images", 5), productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
