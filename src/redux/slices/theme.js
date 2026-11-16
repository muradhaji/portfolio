import { createSlice } from '@reduxjs/toolkit';
import { getInitialTheme } from '../../helpers/theme';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: getInitialTheme(),
  },
  reducers: {
    set: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { set } = themeSlice.actions;

export default themeSlice.reducer;
