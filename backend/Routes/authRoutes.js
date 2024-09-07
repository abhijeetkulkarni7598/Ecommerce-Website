const express = require('express');
const { register, login, logout, getUsers } = require('../Controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware'); // Optional: If you want authentication
const roleMiddleware = require('../middlewares/roleMiddleware');

const router = express.Router();

/*router.get('/',async (req, res) => {
    try {
      const users = await User.find();  // Fetch all users from the database
      res.json(users);  // Return users in JSON format
    } catch (err) {
      res.status(500).json({ message: 'Error fetching users' });
    }
  });*/

router.get('/users',authMiddleware, roleMiddleware(['admin']),getUsers);  
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

module.exports = router;
