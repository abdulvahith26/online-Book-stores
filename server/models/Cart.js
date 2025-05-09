const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [
    {
      bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
      quantity: { type: Number, default: 1 }
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Cart', cartSchema);
