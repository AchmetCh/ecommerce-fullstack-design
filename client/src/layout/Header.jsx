import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../ContextApi.jsx";

const Header = ( ) => {
  const { cartCount, setCartCount } = useAuth();
  return (
    <header className="bg-white shadow-md p-4 flex flex-col md:flex-row items-center justify-between">
      {/* Logo */}
      <Link
        to="/"
        className="text-xl font-bold text-gray-800 mb-2 md:mb-0 hover:text-blue-600 transition"
      >
        MyShop
      </Link>

      {/* Search Input */}
      <div className="w-full md:w-1/3 mb-2 md:mb-0">
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      {/* Category Buttons */}
      <div className="flex space-x-2 mb-2 md:mb-0">
        <Link
          to="/products"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          All Products
        </Link>
        {["All", "Men", "Women", "Kids"].map((cat) => (
          <button
            key={cat}
            onClick={() => onCategorySelect(cat.toLowerCase())}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cart Button */}
      <div className="relative">
        <Link
          to="/cart"
          className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6m0 0H17M9 19a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4z"
            />
          </svg>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
