// CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (book) => {
    console.log(book); // Add this inside the map or addToCart

    const exists = cartItems.find(item => item.id === book.id);
    if (exists) {
      // Optional: increase quantity
      alert("Already in cart");
      return;
    }
    setCartItems([...cartItems, { ...book, quantity: 1 }]);
  };

  const removeFromCart = (bookId) => {
    setCartItems(cartItems.filter(item => item._id !== bookId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
