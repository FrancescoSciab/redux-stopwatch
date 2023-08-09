import { createSlice } from "@reduxjs/toolkit";

export const stopwatchSlice = createSlice({
    name: 'stopwatch',
    initialState: {
        value: 2
    },
    reducers: {
        increment: state => {
            //function to increment
            state.value++
        },
        start: state => {
            //function to start
            while (state.value > 0) {
                setInterval(state.value--, 1000)
            }
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
            if(state.value > 0) {
                state.value--
            }
        }
    }
})

export const { increment, start, stop, lap, reset, decrement} = stopwatchSlice.actions

export const selectCount = (state) => state.stopwatch.value

export default stopwatchSlice.reducer