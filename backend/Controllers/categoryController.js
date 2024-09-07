const Category = require('../Models/categoryModel');

// Add Category
exports.addCategory = async (req, res) => {
  const { category_name } = req.body;
  const category = new Category({ category_name });

  try {
    await category.save();
    res.status(201).json({ message: 'Category added successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Error adding category' });
  }
};

// Fetch All Categories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(400).json({ message: 'Error fetching categories' });
  }
};
