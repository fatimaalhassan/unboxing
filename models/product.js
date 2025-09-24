const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  makeup: [
    {
      type: String,
      required: true,
    },
  ],
  perfume: [
    {
      type: String,
      required: true,
    },
  ],
  giftWrapping: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  favouritedByUsers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
