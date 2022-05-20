import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    // It tell the store to use this slice reducer function to handle all updates to that state
    counter: counterReducer,
  },
});
