const User = require('../Models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register
exports.register = async (req, res) => {
    const { name, email, password, role } = req.body;

    // Validate role if necessary
    if (role && !['admin', 'customer'].includes(role)) {
      return res.status(400).json({ message: 'Invalid role' });
    }
  
    const user = new User({ name, email, password, role: role || 'customer' });

  try {
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Error registering user' });
  }
};

exports.getUsers = async (req, res) => {
  try {
    console.log('Fetching users from the database...');
    const users = await User.find();
    console.log('Users fetched:', users);
    res.json(users);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ message: 'Error fetching users', error: err.message });
  }
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) return res.status(400).json({ message: 'User not found' });

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '1h'
  });

  res.json({ token });
};

// Logout
exports.logout = (req, res) => {
  // Invalidate the token on the client side
  res.json({ message: 'Logged out successfully' });
};
