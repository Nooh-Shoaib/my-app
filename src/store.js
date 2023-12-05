// store.js
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk, withExtraArgument } from 'redux-thunk';
import productReducer from './actions/productReducer';

const rootReducer = combineReducers({
        productState: productReducer,
});

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
console.log('<<<<<<<')
const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(...middleware))
);

export default store;
