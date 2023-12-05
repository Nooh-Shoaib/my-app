// actions/productActions.js
import { SET_PRODUCT, SET_LOADING } from './actionTypes';

export const setProduct = (product) => ({
        type: SET_PRODUCT,
        payload: product,
});

export const setLoading = (loading) => ({
        type: SET_LOADING,
        payload: loading,
});
