const express = require('express');
const { getBooks, getBookById, markAsSold } = require('../controllers/BookController');
const router = express.Router();

router.get('/', getBooks);
router.get('/:id', getBookById);
router.put('/:id/sold', markAsSold);

module.exports = router;
