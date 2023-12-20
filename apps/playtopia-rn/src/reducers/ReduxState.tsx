import { configureStore } from '@reduxjs/toolkit';
import paymentReducer from './payment/payment';
export const ReduxState = configureStore({
  reducer: {
    payment: paymentReducer,
  },
});

export type RootState = ReturnType<typeof ReduxState.getState>;
export type AppDispatch = typeof ReduxState.dispatch;
