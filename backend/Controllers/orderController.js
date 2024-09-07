const Order = require('../Models/orderModel');
const Cart = require('../Models/cartModel');

// Create order (checkout)
exports.createOrder = async (req, res) => {
  const { shipping_address } = req.body;
  const user_id = req.user.id;

  const cart = await Cart.findOne({ user_id }).populate('items.product_id');
  if (!cart || cart.items.length === 0) return res.status(400).json({ message: 'Cart is empty' });

  const orderItems = cart.items.map(item => ({
    product_id: item.product_id._id,
    quantity: item.quantity,
    price: item.product_id.price
  }));

  const total_price = orderItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const order = new Order({
    user_id,
    items: orderItems,
    total_price,
    shipping_address
  });

  try {
    await order.save();
    await Cart.deleteOne({ user_id });
    res.json({ message: 'Order placed successfully', order });
  } catch (err) {
    res.status(500).json({ message: 'Error placing order' });
  }
};

// Get user's orders
exports.getUserOrders = async (req, res) => {
  const user_id = req.user.id;
  try {
    const orders = await Order.find({ user_id }).populate('items.product_id');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching orders' });
  }
};

// Update order status (admin only)
exports.updateOrderStatus = async (req, res) => {
  const { order_id, status } = req.body;

  try {
    const order = await Order.findById(order_id);
    if (!order) return res.status(404).json({ message: 'Order not found' });

    order.status = status;
    await order.save();
    res.json({ message: 'Order status updated', order });
  } catch (err) {
    res.status(500).json({ message: 'Error updating order' });
  }
};
