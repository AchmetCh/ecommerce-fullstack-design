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
        const products = [
            {
                "_id": "60d5ec49e7a5c8001f8e4d4e",
                "name": "Laptop",
                "price": 1200,
                "image": "https://via.placeholder.com/150",
                "description": "A high-performance laptop.",
                "category": "Electronics",
                "stock": 50
            },
            {
                "_id": "60d5ec49e7a5c8001f8e4d4f",
                "name": "Keyboard",
                "price": 75,
                "image": "https://via.placeholder.com/150",
                "description": "A mechanical keyboard.",
                "category": "Electronics",
                "stock": 100
            }
        ];
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


