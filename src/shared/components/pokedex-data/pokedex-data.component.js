// @flow
import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from "@material-ui/core/Paper";
import { PokemonType } from 'shared/components/pokemon-type/pokemon-type.component';
import { PokemonAbilities } from 'shared/components/pokemon-abilities/pokemon-abilities.component';
import { PokemonForms } from 'shared/components/pokemon-forms/pokemon-forms.component';
import { PokemonGameIndices } from 'shared/components/pokemon-game-indices/pokemon-game-indices.component';
import { PokemonMoves } from 'shared/components/pokemon-moves/pokemon-moves.component';
import { PokemonStats } from 'shared/components/pokemon-stats/pokemon-stats.component';
import { withStyles } from '@material-ui/styles';

type Props = {
  additionalPokemonInfo: any,
  classes: Object,
};

const PokedexDataComp = (props: Props) => {
  const { classes } = props;
  const {
    types, 
    base_experience, 
    height,
    abilities,
    forms,
    game_indices,
    moves,
    weight,
    stats,
  } = props.additionalPokemonInfo;
  return (
    <CardContent>
      <Typography 
        className={classes.title}
        variant="h5"
        gutterBottom
      >
        Pokemon information
      </Typography>
      <Paper className={classes.root}>
        <Table>
          <TableBody>
            <TableRow>
            <TableCell className={classes.tableHeader}>
              Abilities
            </TableCell>
              <TableCell>
                <PokemonAbilities abilities={abilities} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tableHeader}>
                Base Experience
              </TableCell>
              <TableCell>{`${base_experience} exp.`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tableHeader}>
                Forms
              </TableCell>
              <TableCell>
                <PokemonForms forms={forms} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tableHeader}>
                Game Indices
              </TableCell>
              <TableCell>
                <PokemonGameIndices gameIndices={game_indices} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tableHeader}>
                Height
              </TableCell>
              <TableCell>{height}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tableHeader}>
                Moves
              </TableCell>
              <TableCell>
                <PokemonMoves moves={moves} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tableHeader}>
                Stats
              </TableCell>
              <TableCell>
                <PokemonStats stats={stats} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tableHeader}>
                Types
              </TableCell>
              <TableCell>
                <PokemonType pokemonType={types} variant="row" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tableHeader}>
                Weight
              </TableCell>
              <TableCell>{weight}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </CardContent>
  );
};

const styles = ({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  tableHeader: {
    fontWeight: 800,
  },
  title: {
    marginBottom: 15,
  }
});

const PokedexData = withStyles(styles)(PokedexDataComp);

export default PokedexData;