const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  description: String,
  price: Number,
  image: String,
  isSold: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);
