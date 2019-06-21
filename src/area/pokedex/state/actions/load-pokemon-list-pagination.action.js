// @flow
import axios from 'axios';
import { pokedexSliceReducer } from '../pokedex.reducer';
import { loadAdditionalPokemonInfoAction } from './load-additional-pokemon-info.action';

const prefix = pokedexSliceReducer;
const loadPokemonListPaginationPostFix: string = `LOAD_POKEMON_LIST_PAGINATION_ACTION/${prefix}`;

export const loadPokemonListPaginationAction = (dispatch: function, pageApiUrl: string) => {
  axios.get(pageApiUrl)
    .then((response) => {
      loadAdditionalPokemonInfoAction(response.data, dispatch);
      dispatch({
        type: loadPokemonListPaginationPostFix,
        payload: response.data
      });
    })
    .catch((error) => error);
};