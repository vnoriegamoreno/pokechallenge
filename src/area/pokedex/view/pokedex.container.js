// @flow
import { connect } from 'react-redux';
import PokedexComponent from './pokedex.component';
import { loadPokemonListAction } from '../state/actions/load-pokemon-list.action';

const mapDispatchToProps = (dispatch) => {
  return {
    loadPokemonList: () => loadPokemonListAction(dispatch),
  };
};

const Pokedex = connect(
  null,
  mapDispatchToProps
)(PokedexComponent);

export default Pokedex;