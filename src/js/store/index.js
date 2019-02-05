// src/js/store/index.js

import { createStore } from 'redux';
import rootReducer from '../reducers/index';

// enables redux dev tools in Chrome
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    storeEnhancers());

export default store;