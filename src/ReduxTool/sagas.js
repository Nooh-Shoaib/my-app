// sagas.js
import { put, takeEvery, all } from 'redux-saga/effects';
import { fetchProductData, setData, setLoading } from '../ReduxTool/productSlice';
import axios from 'axios';
import { generateEndpoint } from '../utils/apiEndpoints';
import PathPage from '../utils/PathPage';

function* fetchData(action) {
        try {
                const { id } = action.payload;
                const endpoint = generateEndpoint(id);
                const response = yield axios.get(`${PathPage}/${endpoint}`);
                yield put(setData(response.data.ProductImages || []));
        } catch (error) {
                console.error('Error fetching product data:', error.message);
        } finally {
                yield put(setLoading(false));
        }
}

function* watchFetchData() {
        yield takeEvery(fetchProductData.type, fetchData);
}

export default function* rootSaga() {
        yield all([
                watchFetchData(),

        ]);
}
