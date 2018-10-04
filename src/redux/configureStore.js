import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import localforage from 'localforage';
import thunk from 'redux-thunk';

import reducer from './store';

const middleware = [thunk];

const persistConfig = {
  key: 'root',
  storage: localforage,
  whitelist: ['events'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(persistedReducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(...middleware),
));

const persistor = persistStore(store);

export { store, persistor };
