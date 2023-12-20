//productReducer.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchProductData } from '../ReduxTool/productActions';

const initialState = {
        data: [],
        selectedProduct: {},
        loading: false,
};

const productSlice = createSlice({
        name: 'product',
        initialState,
        reducers: {},
        extraReducers: (builder) => {
                builder
                        .addCase(fetchProductData.pending, (state) => {
                                state.loading = true;
                        })
                        .addCase(fetchProductData.fulfilled, (state, action) => {
                                state.data = action.payload.ProductImages || [];
                                state.selectedProduct = action.payload;
                                state.loading = false;
                        })
                        .addCase(fetchProductData.rejected, (state) => {
                                state.loading = false;
                                // handle the error as needed
                        });
        },
});

export default productSlice.reducer;
