import {configurestore} from '@reduxjs/toolkit';
import todoReducer from './index';

export default configurestore({
    reducer:{
        tasks: todoReducer,


    },
});