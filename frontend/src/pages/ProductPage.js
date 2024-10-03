import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductDetails } from '../redux/actions/productActions';
import "../styles/global.css";

const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.products.productDetails);

  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, [dispatch, id]);

  return (
    <div className="container mx-auto py-8">
<div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">      
     <img
        src={`http://localhost:5000${productDetails.image_url}`}
        alt={productDetails.product_name}
        className="w-full h-96 object-cover rounded-lg"
      />
      <div className='description-container'>
      <div className='description-box'>
        <h2 className="text-4xl font-bold mb-4">
          {productDetails.product_name}
        </h2>
        <p className="text-2xl font-semibold">
          ₹{productDetails.price}
        </p>
        <p className="my-6">{productDetails.description}</p>
        <button className="bg-green-600 px-6 py-3 rounded-lg text-white hover:bg-green-700">
          Buy now
        </button>
      </div>
      </div>
    </div>
    </div>
  );
};

export default ProductPage;
