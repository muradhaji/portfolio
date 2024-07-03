import { THEME } from '../../helpers/constants';
import themeTypes from '../actions/themeTypes';

const initialState = {
  theme: THEME.LIGHT,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case themeTypes.TOGGLE: {
      return {
        ...state,
        theme: state.theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT,
      };
    }
    case themeTypes.SET: {
      return {
        ...state,
        theme: action.payload,
      };
    }
    default:
      return state;
  }
};

export default themeReducer;
