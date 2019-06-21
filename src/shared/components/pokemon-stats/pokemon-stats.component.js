// @flow
import React from 'react';
import { withStyles } from '@material-ui/styles';

type Props = {
  stats: Array<Object>,
  classes: Object,
};

export const PokemonStatsComp = (props: Props) => {
  const { stats, classes } = props;
  return (
    <div>
      {stats.map((pokeStats) => {
        return (
          <div key={pokeStats.stat.name}>
            <span className={classes.baseStat}>
              {pokeStats.base_stat}
            </span>
            <span>
              {pokeStats.stat.name}
            </span>
          </div>
        );
      })}
    </div>
  );
};

const styles = ({
  baseStat: {
    width: '30px',
    marginRight: 5,
  }
});

export const PokemonStats = withStyles(styles)(
  PokemonStatsComp
);