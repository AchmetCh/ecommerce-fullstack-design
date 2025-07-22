const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const URI = process.env.MONGO_URL;

const connectDB = async () => {
    try {
        await mongoose.connect(URI)
        console.log('✅ MongoDB connected successfully');
    } catch (error) {
        console.error('❌ MongoDB connection failed:', error.message);
        process.exit(1); // Exit the process with failure
    }
}
module.exports = connectDB;