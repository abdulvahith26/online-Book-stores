import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  const [books, setBooks] = useState([]);
  const { cartItems, addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/books');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    fetchBooks();
  }, []);

  // Check if a book is already in the cart
  const isInCart = (bookId) => {
    return cartItems.some((item) => item._id === bookId);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-6">Featured Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <div key={book._id || book.id} className="bg-white p-4 shadow rounded">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{book.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{book.author}</p>
              <p className="text-sm text-gray-600 mb-4">{book.description}</p>
              <div className="flex justify-between items-center">
                <Link
                  to={`/book/${book._id || book.id}`}
                  className="text-blue-600 hover:underline text-sm"
                >
                  View Details
                </Link>
                {isInCart(book._id || book.id) ? (
                  <button
                    onClick={() => navigate('/cart')}
                    className="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600"
                  >
                    View Cart
                  </button>
                ) : (
                  <button
                    onClick={() => addToCart(book)}
                    className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
