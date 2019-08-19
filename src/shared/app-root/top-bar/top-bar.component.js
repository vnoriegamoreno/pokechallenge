// @flow
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

type Props = {
  classes: Object,
};

type State = {
  isOpen: boolean,
};

class TopBarComp extends React.Component<Props, State> {
  state = {
    isOpen: false,
  };
  handleOnClick() {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
    console.log(this.state.isOpen)
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar className={classes.topBarStyles} position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Pokedex
            </Typography>
            <Button color="inherit" className={classes.hover}>
              <Link className={classes.button} to="/">
                List
              </Link>
            </Button>
            <Button color="inherit" className={classes.hover}>
              <Link className={classes.button} to="/capture-pokemons">
                Capture
              </Link>
            </Button>
            <Button color="inherit" className={classes.hover}>
              <Link className={classes.button} to="/my-pokemons">
                My Pokemons
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const styles = ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 2,
  },
  title: {
    flexGrow: 1,
    color: '#000',
  },
  topBarStyles: {
    background: '#ee1515',
    marginBottom: 15,
  },
  button: {
    color: '#000',
    textDecoration: 'none',
  },
  hover: {
    '&:hover': {
      background: '#fff',
    }
  }
});

const TopBar = withStyles(styles)(
  TopBarComp
);

export default TopBar;