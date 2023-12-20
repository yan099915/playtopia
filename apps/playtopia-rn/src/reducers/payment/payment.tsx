import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PaymentState {
  step: string;
  provider: string;
}

const initialState: PaymentState = {
  step: 'pending',
  provider: '',
};

const PaymentSlice = createSlice({
  name: 'process',
  initialState,
  reducers: {
    process: (state, action: PayloadAction<string>) => {
      state.step = action.payload;
    },
    selectProvider: (state, action: PayloadAction<string>) => {
      state.provider = action.payload;
    },
  },
});

export const { process, selectProvider } = PaymentSlice.actions;

export default PaymentSlice.reducer;
