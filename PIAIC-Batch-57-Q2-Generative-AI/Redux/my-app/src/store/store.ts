import { configureStore } from "@reduxjs/toolkit";
import { counterSlicerReducer } from "./counter/counterSlicer";

export const store = configureStore({
    reducer: counterSlicerReducer
})