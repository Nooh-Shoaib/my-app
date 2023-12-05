// reducers/productReducer.js
import { SET_PRODUCT, SET_LOADING } from './actionTypes'; // Assuming you have actionTypes file

const initialState = {
        loading: true,
        product: {},
};

const productReducer = (state = initialState, action) => {
        switch (action.type) {
                case SET_PRODUCT:
                        return { ...state, product: action.payload };
                case SET_LOADING:
                        return { ...state, loading: action.payload };
                default:
                        return state;
        }
};

export default productReducer;
