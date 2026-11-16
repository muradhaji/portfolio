import { createSlice } from '@reduxjs/toolkit';
import { getInitialTheme } from '../../helpers/theme';

const themeSlice = createSlice({
  name: 'theme',
  // Lazy so the theme is read when the store is created, not at import time.
  initialState: () => ({
    theme: getInitialTheme(),
  }),
  reducers: {
    set: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { set } = themeSlice.actions;

export default themeSlice.reducer;
