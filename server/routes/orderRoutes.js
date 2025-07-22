const express = require('express');
const router = express.Router();
const order = require('../controllers/order');
const auth = require('../middlewares/authMiddleware');

// Get all orders (protected route)
router.get('/', auth.authenticate, order.getAllOrders); 
// Get an order by ID (protected route)
router.get('/:id', auth.authenticate, order.getOrderById);
// Get orders by customer email (protected route)
router.get('/email/:email', auth.authenticate, order.getOrderByEmail);
// Place a new order (protected route)
router.post('/new', order.addOrder);

// Export the router
module.exports = router;