import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from '../components/cart/CartSlice';

const rootReducer = combineReducers({ cartReducer });

export type AppState = ReturnType<typeof store.getState>;

export const store = configureStore({ reducer: rootReducer });
