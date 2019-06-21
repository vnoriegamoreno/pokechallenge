// @flow
import React from 'react';
import Grid from '@material-ui/core/Grid';
import TopBar from 'shared/app-root/top-bar/top-bar.component';
import Paper from "@material-ui/core/Paper";
import { withStyles } from '@material-ui/styles';

type Props = {
  classes: Object,
};

const RequirementsComp = (props: Props) => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <TopBar />
      <Grid container>
        <Grid item xs={12}>
          <Paper className={classes.root}>
            <h1 className={classes.h1}>Requirements</h1>
            <ul>
              <li>Consume the public Pokedex API to retrieve a list of Pokemons.</li>
              <li>Display data returned in a grid of Pokemon.</li>
              <li>Allow selecting a Pokemon and show its individual data</li>
              <li>Add pagination or infinite scrolling.</li>
              <li>Implement animated transitions.</li>
              <li>Route-based navigation.</li>
              <li>Flow or TypeScript annotations.</li>
            </ul>
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
  h1: {
    marginLeft: 10,
  },
});

const Requirements = withStyles(styles)(
  RequirementsComp
);

export default Requirements;