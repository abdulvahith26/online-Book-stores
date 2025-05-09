import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ExploreBooks = () => {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-160px)] bg-gradient-to-br from-gray-50 to-blue-100 flex items-center justify-center px-6 py-12">
        <div className="text-center max-w-2xl bg-white p-10 rounded-2xl shadow-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4">
            Welcome to the Bookstore
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Discover thousands of books from every genre. Sign up or log in to explore our full collection and manage your reading list.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link
              to="/register"
              className="px-6 py-3 w-full md:w-auto bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
            >
              Create Account
            </Link>
            <Link
              to="/login"
              className="px-6 py-3 w-full md:w-auto bg-green-600 text-white text-lg font-medium rounded-lg hover:bg-green-700 transition duration-300 shadow-md"
            >
              Login
            </Link>
            <Link
              to="/reset/:token"
              className="px-6 py-3 w-full md:w-auto bg-yellow-500 text-white text-lg font-medium rounded-lg hover:bg-yellow-600 transition duration-300 shadow-md"
            >
              Reset Password
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ExploreBooks;
