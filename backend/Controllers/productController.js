const Product = require('../Models/productModel');

// Add Product
exports.addProduct = async (req, res) => {
  const { product_name, description, price, category_id } = req.body;

  // Access the uploaded image file
  const image_url = req.file ? `/uploads/${req.file.filename}` : '';

  const product = new Product({
    product_name,
    description,
    price,
    category_id,
    image_url
  });

  try {
    await product.save();
    res.status(201).json({ message: 'Product added successfully', product });
  } catch (err) {
    res.status(500).json({ message: 'Error adding product', error: err.message });
  }
};

// Fetch All Products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('category_id').populate('brand_id');
    res.json(products);
  } catch (err) {
    res.status(400).json({ message: 'Error fetching products' });
  }
};
