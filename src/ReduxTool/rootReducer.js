// rootReducer.js
import { combineReducers } from 'redux';
import { counterReducer, dataReducer } from './reducers';

const rootReducer = combineReducers({
        counter: counterReducer,
        data: dataReducer,
});

export default rootReducer;
