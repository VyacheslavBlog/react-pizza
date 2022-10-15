import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  sort: { name: 'популярности', sortProperty: 'rating' },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      console.log(action);
      state.categoryId = action.payload;
    },
    setActiveSort(state, action) {
      console.log(action);
      state.sort = action.payload;
    },
  },
});

export const { setCategoryId, setActiveSort } = filterSlice.actions;

export default filterSlice.reducer;
