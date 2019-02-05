//src/js/index.js


import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from '../js/store/index';
// import { createFibArray } from '../js/actions/index';
import App from './components/App.jsx';

render (
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

// used to test store and CREATE_FIB_ARRAY action

// window.store = store;
// window.createFibArray = createFibArray;