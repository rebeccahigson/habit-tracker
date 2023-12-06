
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import habitReducer from "./reducers/habitSlice";
import modalReducer from "./reducers/modalSlice";

const reducer = combineReducers({
  habits: habitReducer,
  modal: modalReducer,
});

export const store = configureStore({
    reducer: reducer,
  });
/*
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});*/

/*
export const persistor = persistStore(store);
*/