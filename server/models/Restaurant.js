import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String
});

export default mongoose.model("Restaurant", restaurantSchema);