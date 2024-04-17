import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice';
import todoSlice  from './todoSlice';
const store = configureStore({
    reducer:{
        counterReducer: counterReducer,
        todoSlice: todoSlice
    }
});

export default store;