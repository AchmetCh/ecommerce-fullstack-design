// // src/pages/Product.jsx
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { getProductById } from "../services/api";

// const Product = ({ onAddToCart }) => {  // Fixed: destructure onAddToCart properly
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       const response = await getProductById(id);
//       setProduct(response.data);
//     };
//     fetchProduct();
//   }, [id]);

//   if (!product) {
//     return <div className="text-center mt-10 text-red-600">Product not found.</div>;
//   }

//   const handleAddToCart = (e) => {
//     e.stopPropagation(); // prevent the product click event
//     onAddToCart(product);
//     // Optional: Add some user feedback
//     alert(`${product.name} added to cart!`);
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

//           <button 
//             onClick={handleAddToCart} 
//             className="mt-4 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;


