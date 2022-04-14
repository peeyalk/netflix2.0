import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from './authUserReducer';

export const reduxStore = configureStore({
  reducer: {
    authUserReducer: authUserReducer,
  },
});
