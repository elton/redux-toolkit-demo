import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
// Or from '@reduxjs/toolkit/query/react'
import counterReducer, { counterSlice } from '../features/counter/counterSlice';
import { pokemonApi } from '../services/pokemon';

export const store = configureStore({
  reducer: {
    // It tell the store to use this slice reducer function to handle all updates to that state
    [counterSlice.name]: counterReducer,
    // equal counter: counterReducer,
    // Add the generated reducer as a specific top-level slice
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
