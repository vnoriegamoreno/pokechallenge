// @flow
import axios from 'axios';
import { pokedexSliceReducer } from '../pokedex.reducer';
import type { PokemonList } from '../pokedex.type';

const loadAdditionalInfoPokemonActionPostfix: string = `LOAD_ADDITIONAL_POKEMON_INFO_ACTION/${pokedexSliceReducer}`;

export const loadAdditionalPokemonInfoAction = (pokemonList: PokemonList, dispatch: function) => {
  pokemonList.results.map((pokemon) => {
    const { url, name } = pokemon;
    return axios.get(url)
      .then((response) => {
        dispatch({
          type: loadAdditionalInfoPokemonActionPostfix,
          payload: {
            name, 
            data: response.data
          },
        });
      })
      .catch((error) => error);
  });
};