# 🛍️ Simple Full-Stack E-commerce App

This is a basic full-stack e-commerce application built with **React**, **Tailwind CSS**, **Node.js**, **Express.js**, and **MongoDB**.

Users can browse products, add them to the cart, and place orders — all without needing to create an account.

---

## 🚀 Features

- Full-stack MERN application
- Responsive UI built with **React** and **Tailwind CSS**
- Backend API with **Node.js** and **Express.js**
- **MongoDB** for storing products and orders
- Guest checkout (no login required)
- Clean and minimal codebase

---

## 🧠 Tech Stack

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (with Mongoose)

---

## 📦 Available API Endpoints
- `POST /api/auth/login` - Login as user
- `POST /api/auth/register` - Register User
- `POST /api/orders` – Place a new order
- `GET /api/orders` – Get all orders (admin)
- `GET /api/orders/:id` – Get order by ID
- `GET /api/orders/email/:email` – Get orders by customer email
- `GET /api/products/` - Get all Products
- `GET /api/products/:id` - Get Product by Id
- `POST /api/products/new` - Add New product (admin)


---

## 🛠 Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/AchmetCh/ecommerce-fullstack-design.git
cd secommerce-fullstack-design
```

2. **Install backend dependencies**
```bash
npm install
```

3. **Set up environment variables**
* Create a .env file in the root folder with the following:
```bash
MONGO_URL =  'mongodb URL'
PRIVATE_KEY = your sec
SALT_ROUNDS = rounds
PORT = 8000
```
4. **Run the backend server**
```bash
npm start
```

**📫 Contact**
* Made with ❤️ by Achmet
Feel free to reach out: achmet@dr.com
