const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Middleware to verify JWT token
const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Access token is required'
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    
    // Check if user exists and is active
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'User not found'
      });
    }

    if (!user.isActive) {
      return res.status(401).json({
        success: false,
        message: 'Account is deactivated'
      });
    }

    // Add user info to request
    req.userId = decoded.userId;
    req.user = user;
    next();

  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({
        success: false,
        message: 'Invalid token'
      });
    }
    
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({
        success: false,
        message: 'Token expired'
      });
    }

    console.error('Auth middleware error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error during authentication'
    });
  }
};

// Middleware to check if user is owner
const requireOwner = async (req, res, next) => {
  try {
    if (req.user.userType !== 'owner') {
      return res.status(403).json({
        success: false,
        message: 'Access denied. Owner privileges required.'
      });
    }
    next();
  } catch (error) {
    console.error('Owner middleware error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error during authorization'
    });
  }
};

// Middleware to check if user is renter
const requireRenter = async (req, res, next) => {
  try {
    if (req.user.userType !== 'renter') {
      return res.status(403).json({
        success: false,
        message: 'Access denied. Renter privileges required.'
      });
    }
    next();
  } catch (error) {
    console.error('Renter middleware error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error during authorization'
    });
  }
};

// Optional authentication (doesn't fail if no token)
const optionalAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token) {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
      const user = await User.findById(decoded.userId);
      
      if (user && user.isActive) {
        req.userId = decoded.userId;
        req.user = user;
      }
    }
    
    next();
  } catch (error) {
    // Continue without authentication if token is invalid
    next();
  }
};

module.exports = {
  authenticateToken,
  requireOwner,
  requireRenter,
  optionalAuth
}; 