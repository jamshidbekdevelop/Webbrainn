import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ConnectionsProvider } from './Context';
// import Context from './Context';
import './index.css';
import Root from './root'
ReactDOM.render(
  <React.StrictMode>
    {/* <Context> */}
    <ConnectionsProvider>
      <BrowserRouter>
        <Root/>
      </BrowserRouter>
    </ConnectionsProvider>
    {/* </Context> */}
  </React.StrictMode>,
  document.getElementById('root')
);
