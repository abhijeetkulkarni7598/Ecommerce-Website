const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  product_name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  image_url: { type: String, required: true },
  sizes: [{
    size: { type: String, required: true },  
    stock: { type: Number, required: true, default: 0 }  
  }],
  created_at: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
