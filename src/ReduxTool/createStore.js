// createStore.js
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer';

const persistConfig = {
        key: 'root',
        storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Remove thunk from applyMiddleware if you don't want to use it
const store = createStore(persistedReducer, applyMiddleware(logger));

const persistor = persistStore(store);

export { store, persistor };
