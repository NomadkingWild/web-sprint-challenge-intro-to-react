import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import theme from './theme'
import {ThemeProvider} from "styled-components"

import './App.css'

ReactDOM.render(<ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.querySelector('#root'));
