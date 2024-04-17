
import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counter: 0,
    }
    ,reducers: {
        increment: (state) => {
            state.counter += 1;
        },
        decrement: (state) => {
            state.counter -= 1;
        },
        evenIncrement: (state) => { 
            state.counter += 2;
        },
        incrementByValue: (state, value) => {
            console.log(value);
            state.counter += value.payload.myvalue
        },
        reset: (state) => {
            state.counter = 0;
        }
    },
});

export default counterSlice.reducer;

export const {increment, decrement, evenIncrement, incrementByValue, reset} = counterSlice.actions;
