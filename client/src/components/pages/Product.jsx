
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { backendApi } from '../services/Api';
import { useAuth } from '../../ContextApi';
import toast, { Toaster } from 'react-hot-toast';

const Product = () => {
  const { id } = useParams();
  const { cartItems, setCartItems } = useAuth();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${backendApi}/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        console.error("Failed to fetch product:", err);
        setError("Product not found or failed to load.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

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
  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading product...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">😞</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Product Not Found</h2>
          <p className="text-gray-600 mb-4">{error || "The product you're looking for doesn't exist."}</p>
          <Link 
            to="/products" 
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span>›</span>
            <Link to="/products" className="hover:text-blue-600">Products</Link>
            <span>›</span>
            <span className="text-gray-900 capitalize">{product.category}</span>
            <span>›</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </nav>

        {/* Product Section */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg border">
                <img
                  src={product.image || product.imageUrl || '/placeholder-image.jpg'}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = '/placeholder-image.jpg';
                  }}
                />
              </div>
              
              {/* Additional product images could go here */}
              <div className="flex space-x-2 overflow-x-auto">
                {/* You can add more images here if your API provides them */}
                <div className="flex-shrink-0 w-20 h-20 border rounded-lg overflow-hidden">
                  <img
                    src={product.image || product.imageUrl || '/placeholder-image.jpg'}
                    alt="Thumbnail"
                    className="w-full h-full object-cover cursor-pointer opacity-60 hover:opacity-100 transition"
                  />
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < (product.rating || 4) ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-sm text-gray-500">
                      {product.rating || 4.0} ({product.reviews || 156} reviews)
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-3xl font-bold text-blue-600">
                  ${product.price}
                </div>

                <div className="prose text-gray-600">
                  <p>{product.description || "No description available for this product."}</p>
                </div>

                <div className="flex items-center space-x-4 text-sm">
                  <span className="text-gray-500">Category:</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700 capitalize">
                    {product.category}
                  </span>
                </div>

                {product.brand && (
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="text-gray-500">Brand:</span>
                    <span className="font-medium text-gray-700">{product.brand}</span>
                  </div>
                )}

                <div className="flex items-center space-x-4 text-sm">
                  <span className="text-gray-500">Stock:</span>
                  <span className={`font-medium ${product.stock > 10 ? 'text-green-600' : product.stock > 0 ? 'text-yellow-600' : 'text-red-600'}`}>
                    {product.stock > 0 ? `${product.stock} units available` : 'Out of stock'}
                  </span>
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <label className="text-sm font-medium text-gray-700">Quantity:</label>
                  <select
                    value={selectedQuantity}
                    onChange={(e) => setSelectedQuantity(parseInt(e.target.value))}
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:border-blue-500"
                    disabled={product.stock === 0}
                  >
                    {[...Array(Math.min(product.stock || 1, 10))].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex space-x-4">
                  <button
              onClick={(e) => handleAddToCart(e, product)}
                    disabled={product.stock === 0}
                    className={`flex-1 py-3 px-6 rounded-lg font-medium transition ${
                      product.stock === 0
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                  </button>
                  
                  <button className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>

                <div className="flex items-center space-x-2 text-sm text-green-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Free shipping an All Orders!!!</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">You might also like</h2>
          <div className="text-center text-gray-500 py-8">
            Related products coming soon...
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Product;