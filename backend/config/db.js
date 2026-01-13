const mongoose = require('mongoose');

let conn = null;

const connectDB = async () => {
    if (conn !== null) {
        return conn;
    }

    try {
        conn = await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000 
        });
        console.log('MongoDB Connected');
        return conn;
    } catch (error) {
        console.error('MongoDB connection error:', error);
        throw error;
    }
};

module.exports = connectDB;
