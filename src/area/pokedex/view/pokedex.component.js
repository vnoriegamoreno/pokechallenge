// @flow
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import type { PokemonList } from '../state/pokedex.type';

type Props = {
  pokemonList: PokemonList,
  loadPokemonList: () => void,
  loadPokemonListPagination: () => void,
};

class PokedexComponent extends Component<Props> {
  componentDidMount() {
    this.props.loadPokemonList();
  }
  render() {
    const { pokemonList } = this.props;
    return (
      <div>
        <Grid container alignItems="flex-start" spacing={3}>
          {pokemonList.results && pokemonList.results.map((pokemon) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={pokemon.name}>
                  {pokemon.name}
                </Grid>
              );
          })}
        </Grid>
      </div>
    );
  }
}

export default PokedexComponent;