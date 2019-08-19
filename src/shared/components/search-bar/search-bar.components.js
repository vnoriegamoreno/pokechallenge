import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';

type State = {
  queryString: string
};

class SearchBarComp extends React.Component<State> {
  state = {
    queryString: null,
  };
  handleQueryString(value) {
    console.log(value)
  }
  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <TextField 
            fullWidth
            label="Search for a pokemon ..."
            value={this.state.queryString}
            onChange={(e) => this.handleQueryString(e.target.value)}
          />
        </Grid>
      </Grid>
    );
  }
}

const styles = ({

});

export const SearchBar = withStyles(styles)(

);