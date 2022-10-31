import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../reducers/login_slice';
import filmReducer from '../reducers/films_slice';

export const store = configureStore({
  reducer: {
    loginReducer,
    filmReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;