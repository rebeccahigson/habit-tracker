import { configureStore, combineReducers } from "@reduxjs/toolkit"
import habitReducer from "./reducers/habitSlice";
import modalReducer from "./reducers/modalSlice";
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,} from 'redux-persist';




const reducer = combineReducers({
  habits: habitReducer,
  modal: modalReducer,
});

export const store = configureStore({
  reducer: reducer
});
