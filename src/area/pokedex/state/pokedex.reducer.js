// @flow

type InitialState = {
  pokemonList: any,
  pokemonAdditionalInfo: Array<Object>
};

const initialState: InitialState = {
  pokemonList: [],
  pokemonAdditionalInfo: [],
};

export const pokedexSliceReducer: string = 'pokedexSlice/app';

export const pokedexReducer = (state: InitialState = initialState, action: Object) => {
  switch(action.type) {
    default:
      return state;
  }
};