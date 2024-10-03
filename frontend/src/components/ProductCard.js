import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <img src={`http://localhost:5000${product.image_url}`}
           alt={product.product_name} 
           className="w-full h-64 object-cover rounded-lg mb-4"
            />
      <h3 className="text-lg font-bold">{product.product_name}</h3>
      <p className="text-gray-400">₹{product.price}</p>
      <Link to={`/product/${product._id}`} className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
