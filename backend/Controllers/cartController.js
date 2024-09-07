const Cart = require('../Models/cartModel');
const Product = require('../Models/productModel');

// Add item to cart
exports.addToCart = async (req, res) => {
  const { product_id, quantity } = req.body;
  const user_id = req.user.id;

  let cart = await Cart.findOne({ user_id });

  if (!cart) {
    cart = new Cart({ user_id, items: [] });
  }

  const product = await Product.findById(product_id);
  if (!product) return res.status(404).json({ message: 'Product not found' });

  const existingItem = cart.items.find(item => item.product_id.equals(product_id));
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.items.push({ product_id, quantity });
  }

  try {
    await cart.save();
    res.json({ message: 'Product added to cart', cart });
  } catch (err) {
    res.status(500).json({ message: 'Error adding to cart' });
  }
};

// Get user cart
exports.getCart = async (req, res) => {
  const user_id = req.user.id;
  try {
    const cart = await Cart.findOne({ user_id }).populate('items.product_id');
    if (!cart) return res.status(404).json({ message: 'Cart is empty' });
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching cart' });
  }
};

// Remove item from cart
exports.removeFromCart = async (req, res) => {
  const { product_id } = req.body;
  const user_id = req.user.id;

  try {
    let cart = await Cart.findOne({ user_id });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    cart.items = cart.items.filter(item => !item.product_id.equals(product_id));
    await cart.save();
    res.json({ message: 'Product removed from cart' });
  } catch (err) {
    res.status(500).json({ message: 'Error removing product from cart' });
  }
};
