// @flow
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PokemonCard from 'shared/components/pokemon-card/pokemon-card.component';
import Pagination from 'shared/components/pagination/pagination.component';
import type { PokemonList } from '../state/pokedex.type';

type Props = {
  pokemonList: PokemonList,
  additionalPokemonInfo: Array<Object>,
  loadPokemonList: () => void,
  loadPokemonListPagination: (pageApiUrl: string) => void,
};

class PokedexComponent extends Component<Props> {
  componentDidMount() {
    this.props.loadPokemonList();
  }
  render() {
    const { 
      pokemonList,
      additionalPokemonInfo,
      loadPokemonListPagination
    } = this.props;
    const renderPokemon = additionalPokemonInfo && additionalPokemonInfo.length > 0 
            && pokemonList.results;
    return (
      <div>
        <Grid container alignItems="flex-start" spacing={3}>
          {renderPokemon && pokemonList.results.map((pokemon) => {
              const { name } = pokemon;
              const additionalInfo = additionalPokemonInfo.find(
                (poke) => poke.name === name);
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={name}>
                  { additionalInfo && <PokemonCard name={name} additionalPokemonInfo={additionalInfo.data} />}
                </Grid>
              );
          })}
        </Grid>
        <Pagination 
          loadPokemonListPagination={loadPokemonListPagination}
          nextPage={pokemonList.next}
          prevPage={pokemonList.previous}
        />
      </div>
    );
  }
}

export default PokedexComponent;