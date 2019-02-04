// src/js/reducers/index.js

import { CREATE_FIB_ARRAY } from '../constants/action-types';

const initialState = {
    fibArr: []
};

function rootReducer(state = initialState, action) {
    if (action.type === CREATE_FIB_ARRAY) {
        console.log(action);
        return Object.assign({}, state, {
            fibArr: state.fibArr.concat(action.payload)
        });
    }
    return state;
}

export default rootReducer;