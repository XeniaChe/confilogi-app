import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.scss';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducerPopUp from './store/reducerPopUp';
import reducerRwdNav from './store/reducerRwdNav';

const rootReducer = combineReducers({
  popUp: reducerPopUp,
  RwdNAw: reducerRwdNav,
});
/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-disable no-underscore-dangle */

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
