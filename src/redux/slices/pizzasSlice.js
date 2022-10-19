import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk('pizzas/fetchPizzasStatus', async (params) => {
  const { order, sortBy, category, search, currentPage } = params;
  const { data } = await axios.get(
    `https://-63404624e44b83bc73cd3e47.mockapi.io/items?page=${currentPage}&limit=4${category}&sortBy=${sortBy}&order=${order}${search}`,
  );
  return data;
});

const initialState = {
  items: [],
  status: 'loading', //loading, error, success
};

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
      console.log('hello');
    },
  },
  extraReducers: {
    //   builder.addCase(fetchPizzas.fulfilled, (state, action) => {
    //     state.items = action.payload;
    //     state.status = 'success';
    //     console.log(state);
    //   });
    //   builder.addCase(fetchPizzas.pending, (state, action) => {
    //     state.status = 'loading';
    //     state.items = [];
    //     console.log('идёт загрузка');
    //   });
    //   builder.addCase(fetchPizzas.rejected, (state) => {
    //     state.status = 'error';
    //     state.items = [];
    //   });

    [fetchPizzas.pending]: (state) => {
      state.status = 'loading';
      state.items = [];
      console.log('идёт загрузка');
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
      console.log('Загрузка прошла успешно');
    },
    [fetchPizzas.rejected]: (state) => {
      state.status = 'error';
      state.items = [];
      console.log('Ошибка в загрузке пицц');
    },
  },
});

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
