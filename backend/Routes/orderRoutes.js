const express = require('express');
const { createOrder, getUserOrders, updateOrderStatus } = require('../Controllers/orderController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');
const router = express.Router();

router.post('/create', authMiddleware, createOrder);
router.get('/myorders', authMiddleware, getUserOrders);
router.post('/update', authMiddleware, roleMiddleware(['admin']), updateOrderStatus);

module.exports = router;
