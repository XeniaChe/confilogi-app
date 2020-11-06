import * as actionTypes from './actionTypes';

export const ontTimeInterval = () => {
  return {
    type: actionTypes.ON_TIME_INTERVAL,
  };
};

export const ontMouseOver = () => {
  return {
    type: actionTypes.ON_MOUSE_OVER,
  };
};

export const ontButtonClick = () => {
  return {
    type: actionTypes.ON_BUTTON_CLICK,
  };
};
