// store.js
import {
    configureStore
} from '@reduxjs/toolkit';
import approvalReducer from '../Slices/Approval';

const store = configureStore({
    reducer: {
        approval: approvalReducer,
    },
});

export default store;
