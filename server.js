const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
dotenv.config();

// Database connection
const DatabaseConnection = require('./config/database');
DatabaseConnection();

// Init express
const app = express();

// Middleware
app.use(express.json());

// Paths to routes
const shoppingCart = require('./routes/shoppingCart');

// Create API routes
app.use('/api/v1/shoppingcart', shoppingCart);

const PORT = process.env.PORT || 4200;
app.listen(PORT, console.log(`Server Running in ${process.env.MODE} Mode on Port ${process.env.PORT}`.yellow.bold));