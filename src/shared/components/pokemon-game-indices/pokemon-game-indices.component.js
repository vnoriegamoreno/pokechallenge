// @flow
import React from 'react';
import { withStyles } from '@material-ui/styles';

type Props = {
  gameIndices: Array<Object>,
  classes: Object,
};

type State = {
  expanded: boolean,
};

class PokemonGameIndicesComp extends React.Component<Props,State> {
  state = {
    expanded: false,
  };
  handleOnClick() {
    this.setState((prevState) => ({
      expanded: !prevState.expanded,
    }));
  }
  render() {
    const { gameIndices, classes } = this.props;
    const { expanded } = this.state;
    const pokGameIndices = gameIndices.slice(0, 3);
    return (
      <div>
        {!expanded && pokGameIndices.map((pokeGameIndice) => (
          <div key={pokeGameIndice.version.name}>
            {pokeGameIndice.version.name}
          </div>
        ))}
        {expanded && gameIndices.map((pokeGameIndice) => (
          <div key={pokeGameIndice.version.name}>
            {pokeGameIndice.version.name}
          </div>
        ))}
        <div
          onClick={() => this.handleOnClick()}
          className={classes.showMore}
        >
          {expanded ? 'Less moves' : 'All moves'}
        </div>
      </div>
    );
  }
};

const styles = ({
  showMore: {
    color: '#008cb9',
    cursor: 'pointer',
  },
});

export const PokemonGameIndices = withStyles(styles)(
  PokemonGameIndicesComp
);