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
- `GET /api/orders/new` – Get all orders (admin)
- `DELETE /api/orders/` - Delete an Orders by id (admin)
- `PUT  /api/orders/:id/status` - Change order status (admin)
- `GET /api/products/` - Get all Products
- `GET /api/products/:id` - Get Product by Id
- `POST /api/products/new` - Add New product (admin)

## Demo users
* `Admin User`
- email: admin@admin.com
- pass: 12345
- '---------------'
* `Demo user`
- email: user@user.com
- pass: 12345
---

## Live Url
* https://ecom.myrender.eu/

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


## 📄 License

This project is licensed under the [MIT License](https://opensource.org/license/mit).

You are free to use, modify, and distribute this project for personal or commercial purposes, but please give credit by keeping the license notice.


**📫 Contact**
* Made with ❤️ by Achmet
Feel free to reach out: achmet@dr.com
