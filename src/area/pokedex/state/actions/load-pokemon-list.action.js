// @flow
import axios from 'axios';
import { getAppSettings } from 'shared/utils/app.settings';
import { pokedexSliceReducer } from '../pokedex.reducer';
import { loadAdditionalPokemonInfoAction } from './load-additional-pokemon-info.action';

const prefix = pokedexSliceReducer;
const loadPokemonListActionPostFix: string = `LOAD_POKEMON_LIST_ACTION/${prefix}`;

export const loadPokemonListAction = (dispatch: function) => {
  axios.get(`${getAppSettings().pokemonApiUrl}`)
    .then((response) => {
      loadAdditionalPokemonInfoAction(response.data, dispatch);
      dispatch({
        type: loadPokemonListActionPostFix,
        payload: response.data
      });
    })
    .catch((error) => error);
};