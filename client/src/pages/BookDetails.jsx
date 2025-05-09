
// // pages/BookDetails.jsx
// import { useParams } from 'react-router-dom';
// import { useState, useEffect } from 'react';

// function BookDetails() {
//   const { id } = useParams();
//   const [book, setBook] = useState(null);
//   const [added, setAdded] = useState(false);

//   useEffect(() => {
//     // Simulate fetching book details from API
//     const fetchBook = async () => {
//       const response = await fetch(`/api/books/${id}`);
//       const data = await response.json();
//       setBook(data);
//     };
//     fetchBook();
//   }, [id]);

//   const handleAddToCart = () => {
//     setAdded(true);
//   };

//   if (!book) return <div className="p-4">Loading...</div>;

//   return (
//     <div className="container mx-auto p-4">
//       <div className="flex flex-col md:flex-row gap-6">
//         <img src={book.image} alt={book.title} className="w-full md:w-1/3 rounded shadow" />
//         <div>
//           <h2 className="text-3xl font-bold mb-4">{book.title}</h2>
//           <p className="mb-4">{book.description}</p>
//           <button
//             onClick={handleAddToCart}
//             className={`px-4 py-2 text-white rounded ${added ? 'bg-green-500' : 'bg-blue-600 hover:bg-blue-700'}`}
//           >
//             {added ? 'Added to Cart' : 'Add to Cart'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BookDetails;

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchBook = async () => {
      const response = await axios.get(`http://localhost:5000/api/books/${id}`);
      setBook(response.data);
    };
    fetchBook();
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div>
      <img src={book.image} alt={book.title} width="300" />
      <h2>{book.title}</h2>
      <p>{book.description}</p>
      <p>Price: ₹{book.price}</p>
      <button onClick={() => addToCart(book)}>Add to Cart</button>
    </div>
  );
};

export default BookDetails;
