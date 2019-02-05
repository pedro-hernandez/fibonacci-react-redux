// src/js/actions/index.js

import { CREATE_FIB_ARRAY, GET_FIB_POSITION } from '../constants/action-types';

export function createFibArray(payload) {
    return { type: CREATE_FIB_ARRAY, payload }
}

export function getFibPosition(payload) {
    return { type: GET_FIB_POSITION, payload }
}