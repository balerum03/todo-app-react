import React from 'react';
import ReactDom from 'react-dom';
import Routes from './routes/Routes';

ReactDom.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.querySelector('#root')
);