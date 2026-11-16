import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    collapsed: true,
  },
  reducers: {
    toggle: (state) => {
      state.collapsed = !state.collapsed;
    },
    hide: (state) => {
      state.collapsed = true;
    },
  },
});

export const { toggle, hide } = menuSlice.actions;

export default menuSlice.reducer;
