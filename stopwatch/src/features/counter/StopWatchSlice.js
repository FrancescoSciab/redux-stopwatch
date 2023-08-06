import { createSlice } from "@reduxjs/toolkit";

export const stopwatchSlice = createSlice({
    name: 'stopwatch',
    initialState: {
        value: 30
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
        decrement: state => {
            //function to decrement
            for (let i = 0; i < state.value; i++) {
                state.value--
            }
        }
    }
})

export const { increment, start, stop, lap, reset, decrement} = stopwatchSlice.actions

export const selectCount = (state) => state.stopwatch.value

export default stopwatchSlice.reducer