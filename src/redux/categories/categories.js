import { createSlice } from '@reduxjs/toolkit';

const options = {
  name: 'categories',
  initialState: [],
  reducers: {
    checkStatus: () => ('Under Construction'),
  },
};
const categoriesSlice = createSlice(options);

export const { checkStatus } = categoriesSlice.actions;

export const selectCategories = (state) => state.categories;
export default categoriesSlice.reducer;
