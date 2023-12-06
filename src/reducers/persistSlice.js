import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,} from 'redux-persist';
import { createSlice } from "@reduxjs/toolkit";

export const persistConfig = createSlice({
    name: "persist",
    key: 'counter',
    storage, 
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;