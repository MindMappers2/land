/* eslint-env node */
/* global require, process */
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const router = require('./router/router');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
