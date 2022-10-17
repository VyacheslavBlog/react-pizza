import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;
