import menuTypes from '../actions/menuTypes';

const initialState = {
  collapsed: true,
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case menuTypes.TOGGLE: {
      return {
        ...state,
        collapsed: state.collapsed ? false : true,
      };
    }
    case menuTypes.SHOW: {
      return {
        ...state,
        collapsed: false,
      };
    }
    case menuTypes.HIDE: {
      return {
        ...state,
        collapsed: true,
      };
    }
    default:
      return state;
  }
};

export default menuReducer;
