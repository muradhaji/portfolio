import { combineReducers } from '@reduxjs/toolkit';
import themeReducer from './theme';
import menuReducer from './menu';

const rootReducer = combineReducers({ theme: themeReducer, menu: menuReducer });

export default rootReducer;
