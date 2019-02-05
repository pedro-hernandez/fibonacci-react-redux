// src/js/reducers/index.js

import { CREATE_FIB_ARRAY, GET_FIB_POSITION } from '../constants/action-types';

const initialState = {
    fibPosition: 0,
    result: 0,
};

function rootReducer(state = initialState, action) {
    // if (action.type === CREATE_FIB_ARRAY) {
    //     return Object.assign({}, state, {
    //         fibArr: state.fibArr.concat(action.payload)
    //     });
    // }

    if (action.type === GET_FIB_POSITION) {
        return Object.assign({}, state, {
            fibPosition: action.payload,
            result: fibonacciArray(action.payload)
        });
    }

    return state;
}

function fibonacciArray(fibPosition) {
    // start of Fibonacci sequence
    let array = [0, 1];
    const index = fibPosition - 1;
    // adds up previous two numbers in the array for each iteration
    for (let i = 2; i <= index; i++) {
        array.push(array[i - 2] + array[i - 1])
    }
    console.log(array);
    return array[index];
}

export default rootReducer;