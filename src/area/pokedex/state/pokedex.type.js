// @flow
export type PokemonList = {
  count: number,
  next: ?string,
  previous: ?string,
  results: Array<Object>,
};