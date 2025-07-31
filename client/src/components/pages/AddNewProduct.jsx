import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { backendApi } from '../services/Api';
import { useAuth } from '../../ContextApi';
import toast, { Toaster } from 'react-hot-toast';

const AddNewProduct = () => {
    const { user } = useAuth();
    const [productName, setProductName] = useState({
        name: '',
        price: '',
        image: '',
        category: '',
        description: '',
        stock: ''
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!user || user.role !== 'admin') {
            window.location.href = '/login'; // Redirect to login if not admin
        }
    }, [user]);

    const handleAddProduct = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                toast.error('Please login to add products', {
                    position: 'top-right',
                    duration: 3000,
                });
                window.location.href = '/login';
                return;
            }

            const response = await axios.post(`${backendApi}/products/new`, productName, 
                {
              headers: {
              'Content-Type': 'application/json',
              "Authorization": token
            }
            });
            console.log('Product added successfully:', response.data);
            toast.success('Product added successfully!', {
                position: 'top-right',
                duration: 3000,
            });
            // Reset form after successful submission
            setProductName({
                name: '',
                price: '',
                image: '',
                category: '',
                description: '',
                stock: ''
            });
        } catch (error) {
            console.error('Error adding product:', error);
            
            // Handle specific error messages
            if (error.response?.status === 401) {
                toast.error('Unauthorized. Please login again.', {
                    position: 'top-right',
                    duration: 3000,
                });
                localStorage.removeItem('token');
                window.location.href = '/login';
            } else if (error.response?.status === 403) {
                toast.error('Access denied. Admin privileges required.', {
                    position: 'top-right',
                    duration: 3000,
                });
            } else {
                toast.error(error.response?.data?.message || 'Failed to add product. Please try again.', {
                    position: 'top-right',
                    duration: 3000,
                });
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-4">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Add New Product</h1>
                            <p className="text-gray-600 mt-2">Create a new product listing for your store</p>
                        </div>
                        <Link 
                            to="/admin/products" 
                            className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Products
                        </Link>
                    </div>
                </div>

                {/* Form Container */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                    <div className="p-8">
                        <form onSubmit={handleAddProduct} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Product Name */}
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Product Name *
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter product name"
                                        value={productName.name}    
                                        onChange={(e) => setProductName({ ...productName, name: e.target.value })}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-gray-400"
                                    />
                                </div>

                                {/* Price */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Price ($) *
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="0.00"
                                        value={productName.price}
                                        onChange={(e) => setProductName({ ...productName, price: e.target.value })}
                                        required
                                        min="0"
                                        step="0.01"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-gray-400"
                                    />
                                </div>

                                {/* Stock */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Stock Quantity *
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="0"
                                        value={productName.stock}
                                        onChange={(e) => setProductName({ ...productName, stock: e.target.value })}
                                        required
                                        min="0"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-gray-400"
                                    />
                                </div>

                                {/* Category */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Category *
                                    </label>
                                    <select
                                        value={productName.category}
                                        onChange={(e) => setProductName({ ...productName, category: e.target.value })}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white"
                                    >
                                        <option value="">Select a category</option>
                                        <option value="electronics">Electronics</option>
                                        <option value="clothing">Clothing</option>
                                        <option value="home">Home & Garden</option>
                                        <option value="sports">Sports & Outdoors</option>
                                        <option value="books">Books</option>
                                        <option value="beauty">Beauty & Personal Care</option>
                                        <option value="automotive">Automotive</option>
                                        <option value="toys">Toys & Games</option>
                                    </select>
                                </div>

                                {/* Image URL */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Image URL *
                                    </label>
                                    <input
                                        type="url"
                                        placeholder="https://example.com/image.jpg"
                                        value={productName.image}
                                        onChange={(e) => setProductName({ ...productName, image: e.target.value })}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-gray-400"
                                    />
                                </div>

                                {/* Description */}
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Description *
                                    </label>
                                    <textarea
                                        placeholder="Enter product description..."
                                        value={productName.description}
                                        onChange={(e) => setProductName({ ...productName, description: e.target.value })}
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-gray-400 resize-none"
                                    />
                                </div>
                            </div>

                            {/* Image Preview */}
                            {productName.image && (
                                <div className="border border-gray-200 rounded-lg p-4">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Image Preview
                                    </label>
                                    <div className="w-32 h-32 border border-gray-200 rounded-lg overflow-hidden">
                                        <img 
                                            src={productName.image} 
                                            alt="Product preview"
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.src = '/placeholder-image.jpg';
                                            }}
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Submit Button */}
                            <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-200">
                                <button
                                    type="button"
                                    onClick={() => setProductName({
                                        name: '',
                                        price: '',
                                        image: '',
                                        category: '',
                                        description: '',
                                        stock: ''
                                    })}
                                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                                >
                                    Clear Form
                                </button>
                                <button 
                                    type="submit" 
                                    disabled={loading}
                                    className={`px-8 py-3 rounded-lg font-medium transition-all ${
                                        loading 
                                            ? 'bg-gray-400 cursor-not-allowed text-white' 
                                            : 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow-md'
                                    }`}
                                >
                                    {loading ? (
                                        <div className="flex items-center">
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                            Adding Product...
                                        </div>
                                    ) : (
                                        <div className="flex items-center">
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                            Add Product
                                        </div>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Help Text */}
                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex">
                        <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                            <h3 className="text-sm font-semibold text-blue-900 mb-1">Tips for adding products:</h3>
                            <ul className="text-sm text-blue-800 space-y-1">
                                <li>• Use high-quality images for better customer engagement</li>
                                <li>• Write detailed descriptions to help customers make informed decisions</li>
                                <li>• Choose the most appropriate category for better discoverability</li>
                                <li>• Keep stock quantities accurate to avoid overselling</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster />     
        </div>
    );
};

export default AddNewProduct;