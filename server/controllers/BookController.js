const Book = require('../models/Book');

// Get all available books (not sold)
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find({ isSold: false });
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Get book details by ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Mark book as sold (used when order is placed)
exports.markAsSold = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });

    book.isSold = true;
    await book.save();
    res.json({ message: 'Book marked as sold' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
