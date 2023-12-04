import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { habitSlice } from "./reducers/habitSlice";
import { modalSlice } from "./reducers/modalSlice";

const reducer = combineReducers({
    habits: habitSlice,
    modal: modalSlice,
})

export const store = configureStore({
    reducer: reducer
})