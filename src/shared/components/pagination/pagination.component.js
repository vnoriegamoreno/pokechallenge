// @flow
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/styles';

type Props = {
  classes: Object,
  nextPage: ?string,
  prevPage: ?string,
  loadPokemonListPagination: (pageApiUrl: string) => void,
};

const Pagination = (props: Props) => {
  const { 
    classes,
    nextPage,
    prevPage,
    loadPokemonListPagination
  } = props;
  return (
    <Grid container justify="flex-end" spacing={4}>
      <Grid item>
        <Fab
          className={classes.fabStyles}
          variant="extended"
          size="small"
          aria-label="Previous page"
          onClick={() => {
            if(prevPage) {
              loadPokemonListPagination(prevPage);
            }
          }}
        >
          Previous page
        </Fab>
        <Fab
          className={classes.fabStyles}
          variant="extended"
          size="small"
          aria-label="Next page"
          onClick={() => {
            if(nextPage) {
              loadPokemonListPagination(nextPage);
            }
          }}
        >
          Next page
        </Fab>
      </Grid>
    </Grid>
  );
}

const styles = ({
  fabStyles: {
    backgroundColor: '#ef5350',
    color: '#fff',
    margin: 5,
  },
});

export default withStyles(styles)(Pagination);