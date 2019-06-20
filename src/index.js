import React from 'react';
import ReactDOM from 'react-dom';
import AppRoot from './shared/app-root/app-root.component';
import configureStore from './store';
import { Provider } from 'react-redux';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppRoot />
  </Provider>,
  document.getElementById('root')
);