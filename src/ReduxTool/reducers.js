// reducers.js
import {
        INCREMENT,
        DECREMENT,
        FETCH_DATA_REQUEST,
        FETCH_DATA_SUCCESS,
        FETCH_DATA_FAILURE,
} from './actionTypes';

export const counterReducer = (state = 0, action) => {
        switch (action.type) {
                case INCREMENT:
                        return state + 1;
                case DECREMENT:
                        return state - 1;
                default:
                        return state;
        }
};

export const dataReducer = (
        state = { data: null, loading: false, error: null },
        action
) => {
        switch (action.type) {
                case FETCH_DATA_REQUEST:
                        return { ...state, loading: true, error: null };
                case FETCH_DATA_SUCCESS:
                        return { ...state, loading: false, data: action.payload };
                case FETCH_DATA_FAILURE:
                        return { ...state, loading: false, error: action.error };
                default:
                        return state;
        }
};
