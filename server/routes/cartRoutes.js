const express = require('express');
const {
  getCart,
  addToCart,
  removeFromCart,
  placeOrder
} = require('../controllers/cartController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', auth, getCart);
router.post('/add', auth, addToCart);
router.delete('/remove', auth, removeFromCart);
router.post('/order', auth, placeOrder);

module.exports = router;
