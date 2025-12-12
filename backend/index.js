 // load .env first
const express = require("express");
const app = express();
       // connect to MongoDB
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');

require("dotenv").config();
require('./Models/db');
const PORT = process.env.PORT || 5000;

// Test route
app.get("/ping", (req, res) => {
  res.send("pong");
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})