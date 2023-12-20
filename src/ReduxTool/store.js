import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './sagas';
import { thunk, withExtraArgument } from 'redux-thunk';


const sagaMiddleware = createSagaMiddleware();

const middleware = [withExtraArgument, sagaMiddleware];

const store = createStore(
        rootReducer,
        applyMiddleware(...middleware)
);

sagaMiddleware.run(rootSaga);

export default store;
