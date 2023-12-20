// productActions.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { generateEndpoint } from '../utils/apiEndpoints';
import PathPage from '../utils/PathPage';

export const fetchProductData = createAsyncThunk(
        'products/fetchProductData',
        async (id) => {
                try {
                        const endpoint = generateEndpoint(id);
                        const response = await axios.get(`/${PathPage}/${endpoint}`);
                        return response.data;
                } catch (error) {
                        console.error('Error fetching product data:', error.message);
                        throw error;
                }
        }
);
