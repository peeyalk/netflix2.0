import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from './reducer/authUserReducer';

export const store = configureStore({
  reducer: {
    authUserReducer: authUserReducer,
  },
});
