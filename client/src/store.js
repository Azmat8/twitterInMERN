
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import postReducer from "./features/user/postSlice"; 
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({
    user: userReducer,
    post: postReducer // Add postReducer to the root reducer
});

const persistConfig = {
    key: "root",
    version: 1,
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer
});

export const persistor = persistStore(store);

export default store;

