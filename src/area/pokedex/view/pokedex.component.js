// @flow
import React, { Component } from 'react';

type Props = {
  loadPokemonList: () => void,
};

class PokedexComponent extends Component<Props> {
  componentDidMount() {
    this.props.loadPokemonList();
  }
  render() {
    return (
      <div>Pokedex</div>
    );
  }
}

export default PokedexComponent;