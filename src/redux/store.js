import { configureStore } from '@reduxjs/toolkit';
import countSlice from './slices/countSlice';

export const store = configureStore({
  reducer: {
    counter: countSlice,
  },
});
