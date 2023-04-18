const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../model/User');

// Route for user registration
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if username or email already exists in the database
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(409).json({ error: 'Username or email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    // Generate JWT token with user data in payload
    const token = jwt.sign({ userId: newUser._id, username: newUser.username, email: newUser.email }, 'SECRET_KEY', { expiresIn: '1h' });

    // Send success response with token
    res.json({ token, userId: newUser._id, username: newUser.username, email: newUser.email });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Route for user login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find user in the database by username
    const user = await User.findOne({ username });

    // If user not found, return error response
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Compare password with stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // If password not valid, return error response
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token with user data in payload
    const token = jwt.sign({ userId: user._id, username: user.username, email: user.email }, 'SECRET_KEY', { expiresIn: '1h' });

    // Send success response with token
    res.json({ token, userId: user._id, username: user.username, email: user.email });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
