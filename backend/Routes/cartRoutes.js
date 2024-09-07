const express = require('express');
const { addToCart, getCart, removeFromCart } = require('../Controllers/cartController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/add', authMiddleware, addToCart);
router.get('/', authMiddleware, getCart);
router.post('/remove', authMiddleware, removeFromCart);

module.exports = router;
