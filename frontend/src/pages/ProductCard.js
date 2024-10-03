import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4">
  <div className="w-full h-64 flex justify-center items-center bg-gray-700 rounded-md mb-4">
    {/* Use object-contain to make sure the full image fits inside the box */}
    <img 
      src={`http://localhost:5000${product.image_url}`} 
      alt={product.product_name} 
      className="max-h-full max-w-full object-contain" 
    />
  </div>
  <h3 className="text-xl font-semibold">{product.product_name}</h3>
  <p className="text-lg font-bold">₹{product.price}</p>
  <Link to={`/product/${product._id}`} className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
    View Details
  </Link>
</div>

  );
};

export default ProductCard;
