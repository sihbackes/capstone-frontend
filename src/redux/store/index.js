import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import localStorage from "redux-persist/lib/storage";
import {persistReducer, persistStore} from "redux-persist";
import dataReducer from "../reducers/dataReducer";
import favoritesReducer from "../reducers/favoriteReducer";
import imgByIdReducer from "../reducers/imgByIdReducer";


const persistConfig = {
  key: "root",
  storage: localStorage,
  
};

const bigReducer = combineReducers({
  query: dataReducer,
  favorites: favoritesReducer,
  image: imgByIdReducer
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