const Cart = require('../models/Cart');
const Book = require('../models/Book');

// Get user's cart
exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id }).populate('items.bookId');
    res.json(cart || { items: [] });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Add item to cart
exports.addToCart = async (req, res) => {
  const { bookId } = req.body;
  try {
    let cart = await Cart.findOne({ userId: req.user.id });

    if (!cart) {
      cart = new Cart({ userId: req.user.id, items: [{ bookId }] });
    } else {
      const existingItem = cart.items.find(item => item.bookId.toString() === bookId);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.items.push({ bookId });
      }
    }

    await cart.save();
    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Remove item from cart
exports.removeFromCart = async (req, res) => {
  const { bookId } = req.body;
  try {
    let cart = await Cart.findOne({ userId: req.user.id });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    cart.items = cart.items.filter(item => item.bookId.toString() !== bookId);
    await cart.save();
    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Place order (mark books as sold and clear cart)
exports.placeOrder = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id });

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    for (const item of cart.items) {
      await Book.findByIdAndUpdate(item.bookId, { isSold: true });
    }

    cart.items = [];
    await cart.save();
    res.json({ message: 'Order placed successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
