//productSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { generateEndpoint } from '../utils/apiEndpoints'; // Import generateEndpoint
import PathPage from '../utils/PathPage'; // Import PathPage

const initialState = {
  loading: true,
  data: [],
  selectedProduct: {},
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setData, setSelectedProduct, setLoading } = productSlice.actions;

export const fetchProductData = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const endpoint = generateEndpoint(id);
    const { data: responseData } = await axios.get(`${PathPage}/${endpoint}`);

    if (!responseData || (Array.isArray(responseData) && !responseData.length)) {
      console.warn('Empty or invalid data received from the API.');
      console.log('Full Response Data:', responseData);
      dispatch(setLoading(false));
    } else {
      dispatch(setData(responseData.ProductImages || []));
      dispatch(setSelectedProduct(responseData));
      dispatch(setLoading(false));
    }
  } catch (error) {
    console.error('Error fetching data:', error.message);
    console.error('Error Response:', error.response);
    dispatch(setLoading(false));
  }
};

export default productSlice.reducer;
