import * as actionTypes from './actionTypes';

const initialState = {
  RwdNavVisible: false,
};

const onRwdNavClose = (state, action) => {
  return {
    ...state,
    RwdNavVisible: false,
  };
};

const onRwdNavOpen = (state, action) => {
  return {
    ...state,
    RwdNavVisible: true,
  };
};

const reducerRwdNav = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ON_OPEN_RWDNAVBOX:
      return onRwdNavOpen(state, action);
    case actionTypes.ON_CLOSE_RWDNAVBOX:
      return onRwdNavClose(state, action);

    default:
      return state;
  }
};

export default reducerRwdNav;
