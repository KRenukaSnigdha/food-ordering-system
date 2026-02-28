import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  image: String,
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" }
});

export default mongoose.model("Product", productSchema);