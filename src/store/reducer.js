import * as actionTypes from './actionTypes';

const initialState = {
  popUpVisible: false,
};

const onTimeInterval = (state, action) => {
  return {
    ...state,
    popUpVisible: true,
  };
};

const onButtonClick = (state, action) => {
  return {
    ...state,
    popUpVisible: false,
  };
};

const onMouseOver = (state, action) => {
  return {
    ...state,
    popUpVisible: true,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ON_TIME_INTERVAL:
      return onTimeInterval(state, action);
    case actionTypes.ON_BUTTON_CLICK:
      return onButtonClick(state, action);
    case actionTypes.ON_MOUSE_OVER:
      return onMouseOver(state, action);

    default:
      return state;
  }
};

export default reducer;
