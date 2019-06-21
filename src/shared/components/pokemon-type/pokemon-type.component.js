// @flow
import React from 'react';
import { withStyles } from '@material-ui/styles';

type Props = {
  pokemonType: any,
  variant: string,
  title?: string,
  classes: Object,
};

export const PokemonTypeComp = (props: Props) => {
  const { pokemonType, variant, title, classes, } = props;
  const variantClasses = {
    column: 'subHeaderItemsColumn',
    row: 'subHeaderItemsRow',
  };
  return (
    <div>
      {title && <strong>{title}</strong>}
      {pokemonType.map((pokeType) => {
        return(
          <span 
            key={pokeType.slot}
            className={classes[variantClasses[variant]]}
          >
            {pokeType.type.name}
          </span>
        )
      })}
    </div>
  );
}

const styles = ({
  subHeaderItemsColumn: {
    marginRight: 5,
  },
  subHeaderItemsRow: {
    display: 'block',
  },
});

export const PokemonType = withStyles(styles)(
  PokemonTypeComp
);