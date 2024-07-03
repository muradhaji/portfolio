import menuTypes from './menuTypes';

export const toggle = () => {
  return {
    type: menuTypes.TOGGLE,
  };
};

export const show = () => {
  return {
    type: menuTypes.SHOW,
  };
};

export const hide = () => {
  return {
    type: menuTypes.HIDE,
  };
};
