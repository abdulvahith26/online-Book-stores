import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import only Routes and Route here
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import BookDetails from './pages/BookDetails';
import ExploreBooks from './pages/ExploreBooks' ;
import Cart from './pages/Cart';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';
import Login from './pages/Login' ;

const App = () => {
  return (
    <CartProvider>
      <Routes>
        <Route path = "/" element = {<ExploreBooks />} />
        <Route path="/home" element={<Home />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path = "/login" element = {<Login/>} />
        <Route path="/reset/:token" element={<ResetPassword />} />
      </Routes>
    </CartProvider>
  );
};

export default App;

