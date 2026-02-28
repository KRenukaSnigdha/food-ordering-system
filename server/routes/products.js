import express from "express";
import Product from "../models/Product.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// Get All Products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Get Products by Restaurant
router.get("/:restaurantId", async (req, res) => {
  const products = await Product.find({ restaurantId: req.params.restaurantId });
  res.json(products);
});

// Add Product
router.post("/", auth, async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});

export default router;