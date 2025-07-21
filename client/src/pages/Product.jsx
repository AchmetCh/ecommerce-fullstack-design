// // src/components/pages/Product.jsx

// import React, { useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { getProductById, getProducts } from '../data/ProductData';

// const Product = ({ onAddToCart }) => {
//   const { id } = useParams();
//   const product = getProductById(id);
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [quantity, setQuantity] = useState(1);

//   if (!product) {
//     return (
//       <div className="max-w-7xl mx-auto px-4 py-8 text-center">
//         <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
//         <Link to="/products" className="text-blue-600 hover:underline mt-4 inline-block">
//           Back to products
//         </Link>
//       </div>
//     );
//   }

//   // Generate additional product images for demo
//   const productImages = [
//     product.image,
//     product.image,
//     product.image,
//     product.image
//   ];

//   const relatedProducts = getProducts().filter(p => 
//     p.category === product.category && p.id !== product.id
//   ).slice(0, 4);

//   const handleAddToCart = () => {
//     for (let i = 0; i < quantity; i++) {
//       onAddToCart(product);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 py-6">
//         {/* Breadcrumb */}
//         <nav className="mb-6">
//           <div className="flex items-center space-x-2 text-sm text-gray-600">
//             <Link to="/" className="hover:text-gray-900">Home</Link>
//             <span>›</span>
//             <Link to="/products" className="hover:text-gray-900">Products</Link>
//             <span>›</span>
//             <span className="text-gray-900">{product.name}</span>
//           </div>
//         </nav>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
//           {/* Product Images */}
//           <div className="space-y-4">
//             <div className="aspect-square bg-white rounded-lg overflow-hidden">
//               <img
//                 src={productImages[selectedImage]}
//                 alt={product.name}
//                 className="w-full h-full object-cover"
//               />
//             </div>
            
//             {/* Thumbnail Images */}
//             <div className="flex space-x-2">
//               {productImages.map((image, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setSelectedImage(index)}
//                   className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
//                     selectedImage === index ? 'border-blue-600' : 'border-gray-200'
//                   }`}
//                 >
//                   <img
//                     src={image}
//                     alt={`${product.name} ${index + 1}`}
//                     className="w-full h-full object-cover"
//                   />
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Product Details */}
//           <div className="space-y-6">
//             {/* Stock Status */}
//             <div className="flex items-center space-x-2">
//               <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//               <span className="text-green-600 text-sm font-medium">In stock</span>
//             </div>

//             <h1 className="text-3xl font-bold text-gray-900">
//               {product.name}
//             </h1>

//             {/* Rating */}
//             <div className="flex items-center space-x-2">
//               <div className="flex items-center">
//                 {[...Array(5)].map((_, i) => (
//                   <svg
//                     key={i}
//                     className={`w-5 h-5 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                   </svg>
//                 ))}
//               </div>
//               <span className="text-sm text-gray-500">4.3</span>
//               <span className="text-sm text-gray-400">•</span>
//               <span className="text-sm text-gray-500">32 reviews</span>
//               <span className="text-sm text-gray-400">•</span>
//               <span className="text-sm text-gray-500">{product.stock} sold</span>
//             </div>

//             {/* Price */}
//             <div className="space-y-2">
//               <div className="flex items-center space-x-4">
//                 <span className="text-3xl font-bold text-gray-900">
//                   ${product.price}
//                 </span>
//               </div>
//             </div>

//             {/* Product Info Table */}
//             <div className="bg-white rounded-lg p-6 space-y-4">
//               <div className="grid grid-cols-2 gap-4 text-sm">
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Category:</span>
//                   <span className="font-medium">{product.category}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Stock:</span>
//                   <span className="font-medium">{product.stock} available</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Material:</span>
//                   <span className="font-medium">Premium Quality</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Warranty:</span>
//                   <span className="font-medium">2 years</span>
//                 </div>
//               </div>
//             </div>

//             {/* Quantity and Add to Cart */}
//             <div className="space-y-4">
//               <div className="flex items-center space-x-4">
//                 <span className="text-gray-700 font-medium">Quantity:</span>
//                 <div className="flex items-center border border-gray-300 rounded">
//                   <button
//                     onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                     className="px-3 py-1 hover:bg-gray-100"
//                   >
//                     -
//                   </button>
//                   <span className="px-4 py-1 border-x border-gray-300">
//                     {quantity}
//                   </span>
//                   <button
//                     onClick={() => setQuantity(quantity + 1)}
//                     className="px-3 py-1 hover:bg-gray-100"
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>

//               <div className="flex space-x-4">
//                 <button
//                   onClick={handleAddToCart}
//                   className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
//                 >
//                   Add to Cart
//                 </button>
//                 <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
//                   <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//                   </svg>
//                 </button>
//               </div>
//             </div>

//             {/* Supplier Info */}
//             <div className="bg-white rounded-lg p-6 border">
//               <div className="flex items-center space-x-4">
//                 <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
//                   <span className="text-blue-600 font-bold text-lg">S</span>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-gray-900">Official Store</h3>
//                   <p className="text-sm text-gray-600">Verified Seller</p>
//                   <p className="text-sm text-gray-600">Worldwide shipping</p>
//                 </div>
//               </div>
//               <div className="mt-4 space-y-2">
//                 <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
//                   Contact Seller
//                 </button>
//                 <button className="w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition-colors">
//                   View Store Profile
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Description Section */}
//         <div className="bg-white rounded-lg p-6 mb-8">
//           <div className="border-b border-gray-200 mb-6">
//             <nav className="flex space-x-8">
//               <button className="py-2 px-1 border-b-2 border-blue-600 text-blue-600 font-medium">
//                 Description
//               </button>
//               <button className="py-2 px-1 text-gray-500 hover:text-gray-700">
//                 Reviews (32)
//               </button>
//               <button className="py-2 px-1 text-gray-500 hover:text-gray-700">
//                 Shipping
//               </button>
//             </nav>
//           </div>
          
//           <div className="prose max-w-none">
//             <p className="text-gray-700 leading-relaxed">
//               {product.description}
//             </p>
//             <br />
//             <p className="text-gray-700 leading-relaxed">
//               This premium {product.category.toLowerCase()} item is crafted with attention to detail and 
//               built to last. Made with high-quality materials and designed for both style and functionality, 
//               it's perfect for everyday use or special occasions.
//             </p>
            
//             <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
//                 <ul className="space-y-1 text-gray-700">
//                   <li>• Premium quality materials</li>
//                   <li>• Durable construction</li>
//                   <li>• Modern design</li>
//                   <li>• Easy to maintain</li>
//                 </ul>
//               </div>
              
//               <div>
//                 <h4 className="font-semibold text-gray-900 mb-2">Specifications:</h4>
//                 <ul className="space-y-1 text-gray-700">
//                   <li>• Category: {product.category}</li>
//                   <li>• Stock: {product.stock} available</li>
//                   <li>• Warranty: 2 years</li>
//                   <li>• Free shipping available</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Related Products */}
//         {relatedProducts.length > 0 && (
//           <div className="bg-white rounded-lg p-6">
//             <h3 className="text-xl font-bold text-gray-900 mb-6">You may also like</h3>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//               {relatedProducts.map(relatedProduct => (
//                 <Link
//                   key={relatedProduct.id}
//                   to={`/product/${relatedProduct.id}`}
//                   className="group"
//                 >
//                   <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
//                     <div className="aspect-square overflow-hidden">
//                       <img
//                         src={relatedProduct.image}
//                         alt={relatedProduct.name}
//                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                       />
//                     </div>
//                     <div className="p-3">
//                       <h4 className="font-medium text-gray-900 text-sm line-clamp-2 mb-1">
//                         {relatedProduct.name}
//                       </h4>
//                       <p className="text-blue-600 font-bold">
//                         ${relatedProduct.price}
//                       </p>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Product;

// src/pages/Product.jsx
// import React from "react";
// import { useParams } from "react-router-dom";
// import { getProductById } from "./../data/ProductData";

// const Product = ( onAddToCart) => {
//   const { id } = useParams();
//   const product = getProductById(id);

//   if (!product) {
//     return <div className="text-center mt-10 text-red-600">Product not found.</div>;
//   }
//   const handleAddToCart = (e) => {
//     e.stopPropagation(); // prevent the product click event
//     onAddToCart(product);
//   };

//   return (
//     <div className="max-w-5xl mx-auto px-4 py-10">
//       {/* Breadcrumb */}
//       <div className="text-sm text-gray-500 mb-4">
//         Home / {product.category} / <span className="text-gray-700">{product.name}</span>
//       </div>

//       {/* Product Info */}
//       <div className="flex flex-col md:flex-row gap-8">
//         {/* Image */}
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full md:w-1/2 h-96 object-cover rounded-md border"
//         />

//         {/* Details */}
//         <div className="flex-1 space-y-4">
//           <h1 className="text-2xl font-semibold">{product.name}</h1>
//           <p className="text-gray-600 text-sm">{product.description}</p>
//           <p className="text-lg font-bold text-orange-600">${product.price.toFixed(2)}</p>

//           <p className="text-sm text-gray-500">
//             Category: <span className="text-gray-700 font-medium">{product.category}</span>
//           </p>
//           <p className="text-sm text-gray-500">
//             In Stock: <span className="text-gray-700 font-medium">{product.stock} units</span>
//           </p>

//           <button onClick={handleAddToCart} className="mt-4 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;


// src/pages/Product.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "./../data/ProductData";

const Product = ({ onAddToCart }) => {  // Fixed: destructure onAddToCart properly
  const { id } = useParams();
  const product = getProductById(id);

  if (!product) {
    return <div className="text-center mt-10 text-red-600">Product not found.</div>;
  }

  const handleAddToCart = (e) => {
    e.stopPropagation(); // prevent the product click event
    onAddToCart(product);
    // Optional: Add some user feedback
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        Home / {product.category} / <span className="text-gray-700">{product.name}</span>
      </div>

      {/* Product Info */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 h-96 object-cover rounded-md border"
        />

        {/* Details */}
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-semibold">{product.name}</h1>
          <p className="text-gray-600 text-sm">{product.description}</p>
          <p className="text-lg font-bold text-orange-600">${product.price.toFixed(2)}</p>

          <p className="text-sm text-gray-500">
            Category: <span className="text-gray-700 font-medium">{product.category}</span>
          </p>
          <p className="text-sm text-gray-500">
            In Stock: <span className="text-gray-700 font-medium">{product.stock} units</span>
          </p>

          <button 
            onClick={handleAddToCart} 
            className="mt-4 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
