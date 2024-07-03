import themeTypes from './themeTypes';

export const toggle = () => {
  return {
    type: themeTypes.TOGGLE,
  };
};

export const set = (value) => {
  return {
    type: themeTypes.SET,
    payload: value,
  };
};
