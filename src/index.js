import React from 'react';
import ReactDOM from 'react-dom/client';
//import { Provider } from 'react-redux';
//import { createStore } from 'redux';
import './index.css';
import App from './containers/App';
import './containers/App.css'
import reportWebVitals from './reportWebVitals';
//import { searchRobots  } from './reducers';
import 'tachyons';

//const store = createStore(searchRobots)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();