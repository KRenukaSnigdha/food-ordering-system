import express from "express";
import Order from "../models/Order.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// Create Order
router.post("/", auth, async (req, res) => {
  const order = await Order.create({ userId: req.user.id, ...req.body });
  res.json(order);
});

// Get All Orders
router.get("/", auth, async (req, res) => {
  const orders = await Order.find().populate("userId");
  res.json(orders);
});

export default router;