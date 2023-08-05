import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: {
            //function to increment
        },
        start: {
            //function to start
        },
        stop: {
            //function to stop
        },
        lap: {
            //function to lap
        },
        reset: {
            //function to reset
        },
        decrement: {
            //function to decrement
        }
    }
})

export const { increment, start, stop, lap, reset, decrement} = counterSlice.actions

export default counterSlice.reducer