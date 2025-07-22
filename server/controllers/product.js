const product = require('../models/product');

// Controller to handle product-related requests

// Add a new product
exports.addProduct = async (req, res) => {
    const { name, price,image, description, category, stock } = req.body;
    try {
        const newProduct = new product({
            name,
            price,
            image,
            category,
            description,
            stock
        });
        await newProduct.save();
        res.status(201).json({ message: 'Product added successfully', product: newProduct });
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
// Get a product by ID
exports.getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const productItem = await product.findById(id);
        if (!productItem) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(productItem);
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


