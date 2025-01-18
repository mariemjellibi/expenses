import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice';
import expenseReducer from './expenseSlice';

const store = configureStore({
  reducer: {
    expense: expenseReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
