import React from 'react';
import ReactDOM from 'react-dom';
import 'fontsource-roboto';
import './index.css';

import SideNav from './components/SideNav';
import MainContainer from './components/MainContainer';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
