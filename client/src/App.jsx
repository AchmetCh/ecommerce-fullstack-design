import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import ProductList from "./components/pages/Productlist";
import Product from "./components/pages/Product";
import Cart from "./components/pages/Cart";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { useAuth } from "./ContextApi";
import AddProduct from "./components/pages/AddNewProduct";
import Orders from "./components/pages/ViewAllOrders";

function App() {

  const { user, role } = useAuth();
  return (
    <div className="App"> 
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Protected Routes */}
        {role === "admin" && (
          <>
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/orders" element={<Orders />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;