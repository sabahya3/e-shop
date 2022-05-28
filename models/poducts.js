const mongoose = require("mongoose");

const products = mongoose.Schema({
  title: { type: String, required: true },
  image: String,
  description: String,
});

module.exports = mongoose.model("products", products);
