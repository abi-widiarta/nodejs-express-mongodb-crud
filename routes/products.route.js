// make express routes

const express = require("express");

const Product = require("../models/product.models");
const { getAllProducts, getSingleProduct, createProduct, updateProduct, deleteProduct } = require("../controllers/product.controller");

const router = express.Router();

// Get All Products
router.get("/products", getAllProducts);

// Get Single Product
router.get("/products/:id", getSingleProduct);

// Create Product
router.post("/products", createProduct);

// Update Product
router.put("/products/:id", updateProduct);

// Delete Product
router.delete("/products/:id", deleteProduct);

module.exports = router;
