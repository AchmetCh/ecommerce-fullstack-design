// import React, { useState, useEffect } from 'react';
// import { Routes, Route, useNavigate } from 'react-router-dom';
// import Header from './layout/Header';
// import Home from './pages/Home';
// import Cart from './pages/Cart';
// import ProductList from './pages/Productlist';
// import Product from './pages/Product.jsx';
// import { getProducts } from './services/api.js';
// import axios from 'axios';

// function App() {
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const response = await axios.get('http://localhost:8000/api/products');
//       console.log('Fetched products:', response.data);
//       setProducts(response.data);
//       setFilteredProducts(response.data);
//     };
//     fetchProducts();
//     console.log('Products fetched:', products);
//   }, []);

//   const handleSearch = (term) => {
//     if (!term.trim()) {
//       setFilteredProducts(products);
//       return;
//     }

//     const results = products.filter(product =>
//       product.name.toLowerCase().includes(term.toLowerCase()) ||
//       product.description.toLowerCase().includes(term.toLowerCase())
//     );
//     setFilteredProducts(results);
//   };


//   const handleAddToCart = (product) => {
//     const existingItem = cartItems.find((item) => item._id === product._id);
    
//     if (existingItem) {
//       setCartItems(cartItems.map((item) =>
//         item.id === product.id 
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       ));
//     } else {
//       setCartItems([...cartItems, { ...product, quantity: 1 }]);
//     }
//   };

//   const handleRemoveFromCart = (product) => {
//     const existingItem = cartItems.find((item) => item.id === product.id);

//     if (existingItem && existingItem.quantity === 1) {
//       setCartItems(cartItems.filter((item) => item.id !== product.id));
//     } else {
//       setCartItems(cartItems.map((item) =>
//         item.id === product.id
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       ));
//     }
//   };

//   const handleProductClick = (product) => {
//     navigate(`/product/${product._id}`);
//   };

//   const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

//   return (
//     <div className="App">
//       <Header
//         cartCount={cartCount}
//         onSearch={handleSearch}
//       />

//       <Routes>
//         <Route
//           path="/"
//           element={
//             <Home
//               products={filteredProducts}
//               onProductClick={handleProductClick}
//               onAddToCart={handleAddToCart}
//             />
//           }
//         />
//         <Route
//           path="/products"
//           element={
//             <ProductList
//               products={filteredProducts}
//               onProductClick={handleProductClick}
//               onAddToCart={handleAddToCart}
//             />
//           }
//         />
//         <Route
//           path="/product/:id"
//           element={<Product onAddToCart={handleAddToCart} />}
//         />
//         <Route
//           path="/cart"
//           element={
//             <Cart
//               cartItems={cartItems}
//               onAdd={handleAddToCart}
//               onRemove={handleRemoveFromCart}
//             />
//           }
//         />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layout/Header";

function App() {


  return (
    <div className="App"> 
      <Header />

      {/* Define your routes here */}
      <Routes>
        {/* Define your routes here */}
      </Routes>
    </div>
  );
}

export default App;