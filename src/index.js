import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './default.css';

const database = require('./database')
console.log(database)



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);