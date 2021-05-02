import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import './index.css';
import App from './components/App';

// Create store passing it the root reducer 
const store = createStore(reducer);

ReactDOM.render(
  /*
   Wraps the app inside the Provider component 
   passing to it the store 
  */
  <Provider store={store}>
    <App />
  </Provider>, 
document.getElementById('root'))
