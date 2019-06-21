// @flow
import React from 'react';
import { withStyles } from '@material-ui/styles';

type Props = {
  moves: Array<Object>,
  classes: Object,
};

type State = {
  expanded: boolean,
};

class PokemonMovesComp extends React.Component<Props, State> {
  state = {
    expanded: false,
  };
  handleOnClick() {
    this.setState((prevState) => ({
      expanded: !prevState.expanded,
    }));
  }
  render() {
    const { moves, classes } = this.props;
    const { expanded } = this.state;
    const pokeMoves = moves.slice(0, 3);
    return (
      <div>
        {!expanded && pokeMoves.map((shortMoves) => (
          <div key={shortMoves.move.name}>
            {shortMoves.move.name}
          </div>
        ))}
        {expanded && moves.map((allMoves) => (
          <div key={allMoves.move.name}>
            {allMoves.move.name}
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

export const PokemonMoves = withStyles(styles)(
  PokemonMovesComp
);