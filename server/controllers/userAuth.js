const bcrypt = require('bcryptjs');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS)
const PRIVATE_KEY = process.env.PRIVATE_KEY;

// Register a new user
exports.register = async (req, res) => {
    const { email, password, role } = req.body;
    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
        // Create a new user
        const newUser = new User({
            email,
            password: hashedPassword,
            role: role || 'user' // Default to 'user' if no role is provided
        });
        await newUser.save();
        const token = jwt.sign({ id: newUser._id, role: newUser.role }, PRIVATE_KEY, { expiresIn: '1h' });
        res.status(201).json({ token, message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

// Login use
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        // Generate JWT token
        const token = jwt.sign({ id: user._id, role: user.role }, PRIVATE_KEY, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}