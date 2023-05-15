import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.scss'
import {store} from './store/store.js';
import { Provider } from 'react-redux';
import Test from './Test.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Test />
  </Provider>
);
