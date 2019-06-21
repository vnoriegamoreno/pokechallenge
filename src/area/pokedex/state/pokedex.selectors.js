// @flow
import { createSelector } from 'reselect'

const pokedexSliceSelector = (state) => state.pokedexSlice;

export const pokemonListSelector = createSelector(
  pokedexSliceSelector,
  (state) => state && state.pokemonList
);

export const additionalPokemonInfoSelector = createSelector(
  pokedexSliceSelector,
  (state) => state && state.pokemonAdditionalInfo
);