import { configureStore } from "@reduxjs/toolkit";
import { TaskSlice } from "./slice/TaskSlice";

export const store = configureStore({
    reducer: {
        task: TaskSlice.reducer
    }
});
