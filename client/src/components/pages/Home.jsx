import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {backendApi} from '../services/Api';
import { useAuth } from '../../ContextApi';
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
  const { cartItems, setCartItems } = useAuth();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${backendApi}/products`);
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

// Use this handleAddToCart function in both Home.js and ProductList.js

const handleAddToCart = (e, product) => {
  e.stopPropagation();

  // Check if product already exists in cart
  const existingItemIndex = cartItems.findIndex(item => item._id === product._id);
  
  let updatedCart;
  
  if (existingItemIndex !== -1) {
    // Item exists, increase quantity
    updatedCart = cartItems.map((item, index) => 
      index === existingItemIndex 
        ? { ...item, quantity: (item.quantity || 1) + 1 }
        : item
    );
  } else {
    // New item, add to cart with quantity 1
    updatedCart = [...cartItems, { ...product, quantity: 1 }];
  }
  
  setCartItems(updatedCart);
  localStorage.setItem('cartItems', JSON.stringify(updatedCart));

  toast.success(`${product.name} added to cart!`, {
    position: 'top-right',
    duration: 3000,
  });
};
  const handleProductClick = (product) => {
  window.location.href = `/product/${product._id}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Our Store
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover amazing products at great prices. Shop the latest trends and find everything you need.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Shop Now
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Check out our most popular items loved by customers worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.slice(0, 6).map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div onClick={() => handleProductClick(product)} className="aspect-square overflow-hidden cursor-pointer">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                    <button
                      onClick={(e) => handleAddToCart(e, product)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products" className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
           
              View All Products
           
            </Link>
          </div>
        </div>
      </section>
      <Toaster />
    </div>
  );
};

export default Home;

