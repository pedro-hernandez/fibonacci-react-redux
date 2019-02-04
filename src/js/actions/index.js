// src/js/actions/index.js

import { CREATE_FIB_ARRAY } from '../constants/action-types';

export function createFibArray(payload) {
    return { type: CREATE_FIB_ARRAY, payload }
}