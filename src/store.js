import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { habitSlice } from "./reducers/habitSlice";

const reducer = combineReducers({
    habits: habitSlice,
})

export const store = configureStore({
    reducer: reducer
})