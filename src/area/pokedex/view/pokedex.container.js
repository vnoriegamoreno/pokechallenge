// @flow
import { connect } from 'react-redux';
import PokedexComponent from './pokedex.component';
import { loadPokemonListAction } from '../state/actions/load-pokemon-list.action';
import { pokemonListSelector, additionalPokemonInfoSelector } from '../state/pokedex.selectors';

const mapStateToProps = (state) => {
  return {
    pokemonList: pokemonListSelector(state),
    additionalPokemonInfo: additionalPokemonInfoSelector(state),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadPokemonList: () => loadPokemonListAction(dispatch),
  };
};

const Pokedex = connect(
  mapStateToProps,
  mapDispatchToProps
)(PokedexComponent);

export default Pokedex;