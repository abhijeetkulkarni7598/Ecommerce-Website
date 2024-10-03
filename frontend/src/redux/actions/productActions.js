import axios from 'axios';
import { setProductList, setProductDetails } from '../reducers/productReducer';

const API_BASE_URL = 'http://localhost:5000/api/products';  // Backend API URL

// Fetch all products
export const fetchProductList = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API_BASE_URL}`);
    dispatch(setProductList(response.data));
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

// Fetch single product details
export const fetchProductDetails = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    dispatch(setProductDetails(response.data));
  } catch (error) {
    console.error('Error fetching product details:', error);
  }
};

// Add new product (Admin)
export const addProduct = (productData) => async () => {
  try {
    await axios.post(`${API_BASE_URL}`, productData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (error) {
    console.error('Error adding product:', error);
  }
};
