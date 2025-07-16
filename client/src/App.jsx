// App.jsx
import React, { useState } from 'react';
import Header from './layout/Header';
import Home from './pages/Home';
import './App.css';
import { getProducts, getProductsByCategory } from './data/ProductData';

function App() {
  const [filteredProducts, setFilteredProducts] = useState(getProducts());

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

  return (
    <>
      <Header
        cartCount={3}
        onSearch={handleSearch}
        onCategorySelect={handleCategorySelect}
      />
      <Home
        products={filteredProducts}
        onProductClick={(product) => console.log('Product clicked:', product)}
      />
    </>
  );
}

export default App;
