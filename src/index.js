import React from 'react';
import ReactDOM from 'react-dom';
import AppRoot from './shared/app-root/app-root.component';
import Requirements from './area/requirements/view/requirements.component';
import configureStore from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={AppRoot} />
        <Route exact path="/requirements" component={Requirements} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);