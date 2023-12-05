// productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
        name: 'product',
        initialState: {
                loading: true,
                product: {},
        },
        reducers: {
                setProduct: (state, action) => {
                        state.product = action.payload;
                        state.loading = false;
                },
        },
});

export const { setProduct } = productSlice.actions;
export const selectProduct = (state) => state.productState.product;

export default productSlice.reducer;
