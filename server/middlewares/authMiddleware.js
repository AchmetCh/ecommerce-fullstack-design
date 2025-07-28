const jwt  = require('jsonwebtoken');
const dotenv = require('dotenv'); 
dotenv.config();
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const User = require('../models/orders');

// Middleware to authenticate JWT token
exports.authenticate = async (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    try {
        const decoded = jwt.verify(token, PRIVATE_KEY);
       req.user = decoded
        next();
    } catch (error) {
        console.error('Authentication error:', error);
        res.status(401).json({ message: 'Invalid token' });
    }
}

// Middleware to authorize user roles
exports.isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        return res.status(403).json({ message: 'Access denied' });
    }
}