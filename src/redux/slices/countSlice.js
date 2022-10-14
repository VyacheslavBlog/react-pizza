import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

export const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = countSlice.actions;

export default countSlice.reducer;