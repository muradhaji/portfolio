import { combineReducers } from '@reduxjs/toolkit';
import themeReducer from './theme';
import menuReducer from './menu';
import projectsReducer from './projects';

const rootReducer = combineReducers({
  theme: themeReducer,
  menu: menuReducer,
  projects: projectsReducer,
});

export default rootReducer;
