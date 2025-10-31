import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice';

// Enable Redux DevTools in development only
export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
