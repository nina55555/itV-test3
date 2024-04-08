const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },

    price: {
      type: Number,
      required: true,
      default: 5555,
    },

    message: {
      type: String,
      required: [true, "Please enter your message"],
    },

    image: {
      type: String,
      required: false,
    },

  },

  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
