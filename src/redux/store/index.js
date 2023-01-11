import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import localStorage from "redux-persist/lib/storage";
import {persistReducer, persistStore} from "redux-persist";
import dataReducer from "../reducers/dataReducer";


const persistConfig = {
  key: "root",
  storage: localStorage,
  
};

const bigReducer = combineReducers({
  query: dataReducer
})
const persistedReducer = persistReducer(persistConfig, bigReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store);