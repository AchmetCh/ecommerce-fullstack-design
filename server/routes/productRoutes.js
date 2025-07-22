const express = require('express');
const router = express.Router();
const product = require('../controllers/product');
const auth = require('../middlewares/authMiddleware');

// Get all products
router.get('/', product.getAllProducts);
// Get a product by ID
router.get('/:id', product.getProductById);
// Add a new product (protected route)
router.post('/new', auth.authenticate, product.addProduct);
// Export the router
module.exports = router