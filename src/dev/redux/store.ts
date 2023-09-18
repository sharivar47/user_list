import storage from "redux-persist/lib/storage";
import {combineReducers} from "redux";
import {authSlice} from "./AuthSlice";
import {configureStore} from "@reduxjs/toolkit";
import {persistReducer, persistStore} from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
}
const rootReducer = combineReducers({
    [authSlice.name]: authSlice.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: []
});

export const persistor = persistStore(store);

