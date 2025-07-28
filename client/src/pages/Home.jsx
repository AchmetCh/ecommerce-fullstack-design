// import React from 'react';

// const Home = ({ onProductClick, onAddToCart, products }) => {
//   const featuredProducts = products.slice(0, 6); // Display first 6 products as featured
  
//   const handleProductClick = (product) => {
//     if (onProductClick) {
//       onProductClick(product);
//     }
//   };

//   const handleAddToCart = (e, product) => {
//     e.stopPropagation(); // Prevent the product click event from firing
//     if (onAddToCart) {
//       onAddToCart(product);
//       // Optional: Add some user feedback
//       alert(`${product.name} added to cart!`);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             Welcome to Our Store
//           </h1>
//           <p className="text-xl mb-8 max-w-2xl mx-auto">
//             Discover amazing products at great prices. Shop the latest trends and find everything you need.
//           </p>
//           <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
//             Shop Now
//           </button>
//         </div>
//       </section>

//       {/* Featured Products */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Check out our most popular items loved by customers worldwide
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {featuredProducts.map((product) => (
//               <div
//                 key={product.id}
//                 className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
//               >
//                 {/* Image - clicking navigates to product page */}
//                 <div 
//                   className="aspect-square overflow-hidden cursor-pointer"
//                   onClick={() => handleProductClick(product)}
//                 >
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                   />
//                 </div>
                
//                 <div className="p-6">
//                   <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                     {product.name}
//                   </h3>
//                   <p className="text-gray-600 text-sm mb-4 line-clamp-2">
//                     {product.description}
//                   </p>
//                   <div className="flex items-center justify-between">
//                     <span className="text-2xl font-bold text-blue-600">
//                       ${product.price}
//                     </span>
//                     {/* Add to Cart button - separate from navigation */}
//                     <button 
//                       onClick={(e) => handleAddToCart(e, product)}
//                       className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//                     >
//                       Add to Cart
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
//               View All Products
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="bg-white py-16">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Shipping</h3>
//               <p className="text-gray-600">Free shipping on orders over $50</p>
//             </div>

//             <div className="text-center">
//               <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Guarantee</h3>
//               <p className="text-gray-600">100% satisfaction guaranteed</p>
//             </div>

//             <div className="text-center">
//               <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
//               <p className="text-gray-600">Customer support available anytime</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;


