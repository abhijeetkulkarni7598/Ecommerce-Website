import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import { fetchProductList } from '../redux/actions/productActions';

const ProductList = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products.productList);

  useEffect(() => {
    dispatch(fetchProductList());  // Fetch product list on load
  }, [dispatch]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {productList.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};
  
export default ProductList;
