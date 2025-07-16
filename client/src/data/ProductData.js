// src/components/data/ProductData.js

const products = [
  {
    id: 1,
    name: "Regular Fit Resort Shirt",
    price: 57.99,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
    description: "Comfortable cotton resort shirt perfect for casual wear. Made with premium materials for lasting comfort.",
    category: "Clothing",
    stock: 25
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    description: "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
    category: "Electronics",
    stock: 15
  },
  {
    id: 3,
    name: "Smartphone iPhone Style",
    price: 699.99,
    image: "https://images.unsplash.com/photo-1512499617640-c2f999943e4b?w=400&h=400&fit=crop",
    description: "Latest generation smartphone with advanced camera system and all-day battery life.",
    category: "Electronics",
    stock: 8
  },
  {
    id: 4,
    name: "Leather Wallet",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    description: "Premium leather wallet with multiple card slots and RFID protection.",
    category: "Accessories",
    stock: 30
  },
  {
    id: 5,
    name: "Running Sneakers",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
    description: "Comfortable running shoes with advanced cushioning and breathable mesh upper.",
    category: "Footwear",
    stock: 20
  },
  {
    id: 6,
    name: "Cotton T-Shirt",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    description: "Soft cotton t-shirt available in multiple colors. Perfect for everyday wear.",
    category: "Clothing",
    stock: 50
  },
  {
    id: 7,
    name: "Laptop Computer",
    price: 999.99,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
    description: "High-performance laptop with fast processor and long battery life. Perfect for work and entertainment.",
    category: "Electronics",
    stock: 12
  },
  {
    id: 8,
    name: "Denim Jeans",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
    description: "Classic denim jeans with perfect fit and durable construction.",
    category: "Clothing",
    stock: 35
  },
  {
    id: 9,
    name: "Smart Watch",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    description: "Advanced smartwatch with fitness tracking, heart rate monitor, and smartphone connectivity.",
    category: "Electronics",
    stock: 18
  },
  {
    id: 10,
    name: "Backpack",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    description: "Durable backpack with multiple compartments and laptop sleeve. Perfect for school or travel.",
    category: "Accessories",
    stock: 22
  }
];

export const getProducts = () => products;

export const getProductById = (id) => products.find(product => product.id === parseInt(id));

export const getProductsByCategory = (category) => 
  products.filter(product => product.category.toLowerCase() === category.toLowerCase());

export const getCategories = () => [...new Set(products.map(product => product.category))];

export default products;