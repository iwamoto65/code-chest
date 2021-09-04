import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider as MaterialUiThemeProvider } from '@material-ui/styles';
import { theme } from './styles/material-ui/custom-style';
import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <MaterialUiThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </MaterialUiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
