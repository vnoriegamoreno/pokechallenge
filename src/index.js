import React from 'react';
import ReactDOM from 'react-dom';
import AppRoot from './shared/app-root/app-root.component';
import CapturePokemons from './area/capture-pokemons/view/capture-pokemons.component';
import configureStore from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={AppRoot} />
        <Route exact path="/capture-pokemons" component={CapturePokemons} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);