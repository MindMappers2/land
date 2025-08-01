const express = require('express');
const { contactForm } = require('../controllers/controller');
const authRoutes = require('./authRoutes');

const router = express.Router();

// Contact form route
router.post('/contact', contactForm);

// Authentication routes
router.use('/auth', authRoutes);

module.exports = router;
