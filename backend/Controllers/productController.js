const Product = require('../Models/productModel');

// Add Product
exports.addProduct = async (req, res) => {
  const { product_name, description, price, category_id, sizes} = req.body;

  // Access the uploaded image file
  const image_url = req.file ? `/uploads/${req.file.filename}` : '';

  const product = new Product({
    product_name,
    description,
    price,
    category_id,
    image_url,
    sizes
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
    const products = await Product.find().populate('category_id');
    res.json(products);
  } catch (err) {
    res.status(400).json({ message: 'Error fetching products' });
  }
};

// Update Product (PATCH method)
exports.updateProduct = async (req, res) => {
  const { product_name, description, price, category_id, sizes } = req.body;

  // Access the uploaded image file (if updating the image)
  const image_url = req.file ? `/uploads/${req.file.filename}` : undefined;

  const updateFields = {
    ...(product_name && { product_name }),
    ...(description && { description }),
    ...(price && { price }),
    ...(category_id && { category_id }),
    ...(sizes && { sizes }),
    ...(image_url && { image_url })
  };

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,    // The product ID from the URL
      { $set: updateFields },  // Update only the fields provided in the request body
      { new: true, runValidators: true }  // Return the updated document and run validations
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json({ message: 'Product updated successfully', updatedProduct });
  } catch (err) {
    res.status(500).json({ message: 'Error updating product', error: err.message });
  }
};

