const express = require('express');
const { addCategory, getAllCategories } = require('../Controllers/categoryController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');
const router = express.Router();

router.post('/add', authMiddleware, roleMiddleware(['admin']), addCategory);
router.get('/', getAllCategories);

module.exports = router;
