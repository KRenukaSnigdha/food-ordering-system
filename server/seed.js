import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";

import User from "./models/User.js";
import Product from "./models/Product.js";
import Restaurant from "./models/Restaurant.js";
import Order from "./models/Order.js";

dotenv.config();

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");

    // Clear all data
    await User.deleteMany({});
    await Product.deleteMany({});
    await Restaurant.deleteMany({});
    await Order.deleteMany({});
    console.log("Existing data cleared");

    // -----------------------------
    // 1️⃣ Create Restaurants
    // -----------------------------
    const restaurants = await Restaurant.insertMany([
      {
        name: "Pizza Palace",
        description: "Authentic Italian Pizza",
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
      },
      {
        name: "Burger Hub",
        description: "Best burgers in town",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349"
      },
      {
        name: "Sushi World",
        description: "Fresh Japanese sushi",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c"
      }
    ]);

    console.log("Restaurants created");

    // -----------------------------
    // 2️⃣ Create Products
    // -----------------------------
    const products = await Product.insertMany([
      {
        name: "Margherita Pizza",
        description: "Classic cheese pizza",
        price: 300,
        category: "Pizza",
        image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65",
        restaurantId: restaurants[0]._id
      },
      {
        name: "Pepperoni Pizza",
        description: "Loaded with pepperoni",
        price: 400,
        category: "Pizza",
        image: "https://images.unsplash.com/photo-1548365328-9f547fb0953d",
        restaurantId: restaurants[0]._id
      },
      {
        name: "Cheeseburger",
        description: "Beef patty with cheese",
        price: 250,
        category: "Burger",
        image: "https://images.unsplash.com/photo-1550317138-10000687a72b",
        restaurantId: restaurants[1]._id
      },
      {
        name: "California Roll",
        description: "Crab and avocado roll",
        price: 350,
        category: "Sushi",
        image: "https://images.unsplash.com/photo-1562158070-622a6f1b9b05",
        restaurantId: restaurants[2]._id
      }
    ]);

    console.log("Products created");

    // -----------------------------
    // 3️⃣ Create Users
    // -----------------------------
    const password = await bcrypt.hash("123456", 10);

    const users = await User.insertMany([
      {
        name: "Admin",
        email: "admin@food.com",
        password,
        role: "admin"
      },
      {
        name: "John Customer",
        email: "john@food.com",
        password,
        role: "customer"
      }
    ]);

    console.log("Users created");

    // -----------------------------
    // 4️⃣ Create Orders
    // -----------------------------
    await Order.insertMany([
      {
        userId: users[1]._id,
        items: [
          { productId: products[0]._id, quantity: 2 },
          { productId: products[2]._id, quantity: 1 }
        ],
        totalPrice: 850,
        address: "123 Main Street",
        status: "Delivered"
      }
    ]);

    console.log("Orders created");

    console.log("✅ Database seeded successfully");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
