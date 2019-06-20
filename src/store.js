// @flow
import { createStore, combineReducers } from 'redux';
import { pokedexReducer } from 'area/pokedex/state/pokedex.reducer';

const rootReducer = combineReducers({
  pokedexSlice: pokedexReducer,
});

export default () => createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);