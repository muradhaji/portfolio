import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/theme';
import menuReducer from './slices/menu';

export const reducer = {
  theme: themeReducer,
  menu: menuReducer,
};

export default configureStore({ reducer });
