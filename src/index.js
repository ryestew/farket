import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

ReactDOM.render(
  <Board count={10} />,
  document.getElementById('react-container')
);
