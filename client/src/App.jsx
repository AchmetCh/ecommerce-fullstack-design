import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './layout/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import './App.css';
import { getProducts, getProductsByCategory } from './data/ProductData';

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

function App() {
  const [filteredProducts, setFilteredProducts] = useState(getProducts());
  const [cartItems, setCartItems] = useState([]);

  const navigate = useNavigate(); // hook to programmatically navigate

  const handleSearch = (term) => {
    const results = getProducts().filter(product =>
      product.name.toLowerCase().includes(term.toLowerCase()) ||
      product.description.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(results);
  };

  const handleCategorySelect = (category) => {
    if (category === 'all') {
      setFilteredProducts(getProducts());
    } else {
      setFilteredProducts(getProductsByCategory(category));
    }
  };

  const handleAddToCart = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : item
        )
      );
    }
  };

  return (
    <>
      <Header
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        onSearch={handleSearch}
        onCategorySelect={handleCategorySelect}
        onCartClick={() => navigate('/cart')} // 👈 navigate to Cart
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={filteredProducts}
              onProductClick={handleAddToCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              onAdd={handleAddToCart}
              onRemove={handleRemoveFromCart}
            />
          }
        />
      </Routes>
    </>
  );
}

export default AppWrapper;
