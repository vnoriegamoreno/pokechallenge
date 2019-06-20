// @flow
import axios from 'axios';
import { getAppSettings } from 'shared/utils/app.settings';
import { pokedexSliceReducer } from '../pokedex.reducer';

const prefix = pokedexSliceReducer;
const loadPokemonListActionPostFix: string = `LOAD_POKEMON_LIST_ACTION/${prefix}`;

export const loadPokemonListAction = (dispatch: function) => {
  axios.get(`${getAppSettings().pokemonApiUrl}`)
    .then((response) => {
      dispatch({
        type: loadPokemonListActionPostFix,
        payload: response.data
      });
    })
    .catch((error) => error);
};