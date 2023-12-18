// actions.js
import { generateEndpoint } from '../utils/apiEndpoints';
import PathPage from '../utils/PathPage';
import {
        INCREMENT,
        DECREMENT,
        FETCH_DATA_REQUEST,
        FETCH_DATA_SUCCESS,
        FETCH_DATA_FAILURE,
} from './actionTypes';
const endpoint = generateEndpoint(id);
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

export const fetchData = () => async (dispatch) => {
        try {
                dispatch({ type: FETCH_DATA_REQUEST });

                const response = await fetch(`${PathPage}/${endpoint}`);
                const data = await response.json();

                dispatch({ type: FETCH_DATA_SUCCESS, payload: data });
        } catch (error) {
                dispatch({ type: FETCH_DATA_FAILURE, error: error.message });
                console.log(FETCH_DATA_FAILURE)
        }
};
