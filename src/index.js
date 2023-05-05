import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Root from './root'
ReactDOM.render(
  
  <React.StrictMode>
      <BrowserRouter>
        <Root/>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
