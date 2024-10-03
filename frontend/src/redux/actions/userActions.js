import axios from 'axios';
import { setUserInfo } from '../reducers/userReducer';

const USER_API_BASE_URL = 'http://localhost:5000/api';  // Backend URL for auth

// Login user
export const loginUser = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post(`${USER_API_BASE_URL}/login`, { email, password });
    dispatch(setUserInfo(response.data));
    localStorage.setItem('token', response.data.token);  // Save token for future requests
  } catch (error) {
    console.error('Login error:', error);
  }
};

// Register user
export const registerUser = (userData) => async () => {
  try {
    await axios.post(`${USER_API_BASE_URL}/register`, userData);
  } catch (error) {
    console.error('Registration error:', error);
  }
};
