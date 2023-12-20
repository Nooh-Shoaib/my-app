// reducers.js
import { combineReducers } from '@reduxjs/toolkit';
import productReducer from './productReducer'; // replace with your actual reducer file

const rootReducer = combineReducers({
        product: productReducer, // replace with your actual reducer slice
        // other reducers...
});

export default rootReducer;
