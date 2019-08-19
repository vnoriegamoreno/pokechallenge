// @flow
import React from 'react';
import Grid from '@material-ui/core/Grid';
import TopBar from 'shared/app-root/top-bar/top-bar.component';
import Paper from "@material-ui/core/Paper";
import { withStyles } from '@material-ui/styles';
// import { SearchBar } from 'shared/components/search-bar/search-bar.component';

type Props = {
  classes: Object,
};

const CapturePokemonsComp = (props: Props) => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <TopBar />
      <Grid container>
        <Grid item xs={12}>
          <Paper className={classes.root}>
            {/* <SearchBar /> */}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

const styles = ({
  root: {
    width: "100%",
    padding: '10px 0px',
  },
  container: {
    margin: 10,
  },
});

const CapturePokemons = withStyles(styles)(
  CapturePokemonsComp
);

export default CapturePokemons;