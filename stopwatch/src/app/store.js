import { configureStore } from "@reduxjs/toolkit";
import stopwatchReducer from "../features/counter/StopWatchSlice"

export default configureStore({
    reducer: {
        stopwatch: stopwatchReducer
    },
})