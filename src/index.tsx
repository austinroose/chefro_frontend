import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import theme from './config/theme';
import {ThemeProvider} from 'styled-components';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { muitheme }from './config/MuiTheme';

import { rootReducer } from './store/reducers/index';

import './i18n';
require('dotenv').config()

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
  <Provider store={store}>
    <React.StrictMode>
        <ThemeProvider theme={theme}>
          <MuiThemeProvider theme={muitheme}>
            <App />
          </MuiThemeProvider>
            
        </ThemeProvider>
    </React.StrictMode>
  </Provider>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
