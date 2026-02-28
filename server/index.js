import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"

import authRoutes from "./routes/auth.js"
import productRoutes from "./routes/products.js"
import orderRoutes from "./routes/orders.js"
import cartRoutes from "./routes/carts.js"
import restaurantRoutes from "./routes/restaurants.js"
import userRoutes from "./routes/users.js";

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err))

// Root route for testing
app.get("/", (req, res) => {
  res.send("Server is running. Go to your frontend at http://localhost:5173/")
})

// API routes
app.use("/api/auth", authRoutes)
app.use("/api/products", productRoutes)
app.use("/api/orders", orderRoutes)
app.use("/api/cart", cartRoutes)
app.use("/api/restaurants", restaurantRoutes)
app.use("/api/users", userRoutes);
app.listen(5000, () => console.log("Server Running on 5000"))