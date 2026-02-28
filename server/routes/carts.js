import express from "express";
import Cart from "../models/Cart.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// Get User Cart
router.get("/", auth, async (req, res) => {
  let cart = await Cart.findOne({ userId: req.user.id }).populate("items.productId");
  if (!cart) cart = await Cart.create({ userId: req.user.id, items: [] });
  res.json(cart);
});

// Add to Cart
router.post("/add", auth, async (req, res) => {
  const { productId, quantity } = req.body;
  let cart = await Cart.findOne({ userId: req.user.id });
  if (!cart) cart = await Cart.create({ userId: req.user.id, items: [] });

  const existingItem = cart.items.find(item => item.productId.toString() === productId);
  if (existingItem) existingItem.quantity += quantity;
  else cart.items.push({ productId, quantity });

  await cart.save();
  res.json(cart);
});

// Update Quantity
router.put("/update", auth, async (req, res) => {
  const { productId, quantity } = req.body;
  const cart = await Cart.findOne({ userId: req.user.id });
  const item = cart.items.find(item => item.productId.toString() === productId);
  if (item) item.quantity = quantity;

  await cart.save();
  res.json(cart);
});

// Remove Item
router.delete("/remove/:productId", auth, async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id });
  cart.items = cart.items.filter(item => item.productId.toString() !== req.params.productId);
  await cart.save();
  res.json(cart);
});

// Clear Cart
router.delete("/clear", auth, async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id });
  cart.items = [];
  await cart.save();
  res.json({ message: "Cart cleared" });
});

export default router;