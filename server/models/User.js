import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: { type: String, enum: ["customer", "admin", "restaurant"], default: "customer" }
});

export default mongoose.model("User", userSchema);