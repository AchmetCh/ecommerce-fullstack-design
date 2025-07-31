const express = require('express');
const router = express.Router();
const order = require('../controllers/order');
const auth = require('../middlewares/authMiddleware');

// Get all orders (protected route)
router.get('/', auth.authenticate, auth.isAdmin, order.getAllOrders); 
// Place a new order (protected route)
router.post('/new', order.addOrder);
// Delete an order by ID (protected route)
router.delete('/:id', auth.authenticate, auth.isAdmin, order.deleteOrderById);
// Update order status (protected route)
router.put('/:id/status', auth.authenticate, auth.isAdmin, order.changeOrderStatus);

// Export the router
module.exports = router;