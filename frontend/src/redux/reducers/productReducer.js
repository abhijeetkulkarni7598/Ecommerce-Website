 import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    productList: [],
    productDetails: {},
  },
  reducers: {
    setProductList: (state, action) => {
      state.productList = action.payload;
    },
    setProductDetails: (state, action) => {
      state.productDetails = action.payload;
    },
  },
});

export const { setProductList, setProductDetails } = productSlice.actions;

export default productSlice.reducer;
