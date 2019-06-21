// @flow
import type { PokemonList } from './pokedex.type';

type InitialState = {
  pokemonList: PokemonList,
  pokemonAdditionalInfo: Array<Object>
};

const initialState: InitialState = {
  pokemonList: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
  pokemonAdditionalInfo: [],
};

export const pokedexSliceReducer: string = 'pokedexSlice/app';

export const pokedexReducer = (state: InitialState = initialState, action: Object) => {
  switch(action.type) {
    case `LOAD_POKEMON_LIST_ACTION/${pokedexSliceReducer}`:
      return {
        ...state,
        pokemonList: action.payload,
      };
    case `LOAD_ADDITIONAL_POKEMON_INFO_ACTION/${pokedexSliceReducer}`:
      return {
        ...state,
        pokemonAdditionalInfo: [
          ...state.pokemonAdditionalInfo,
          action.payload,
        ],
      }
    default:
      return state;
  }
};