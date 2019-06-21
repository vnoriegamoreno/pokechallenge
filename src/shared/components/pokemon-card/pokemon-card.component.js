// @flow
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PokedexData from 'shared/components/pokedex-data/pokedex-data.component';
import { PokemonType } from 'shared/components/pokemon-type/pokemon-type.component';
import { withStyles } from '@material-ui/styles';

type Props = {
  name: string,
  classes: Object,
  additionalPokemonInfo: any,
};

type State = {
  expanded: boolean,
};

class PokemonCardComp extends React.Component<Props, State> {
  state = {
    expanded: false,
  };
  handleOnToggle() {
    this.setState((prevState) => ({
      expanded: !prevState.expanded
    }));
  }
  render() {
    const { name, additionalPokemonInfo, classes } = this.props;
    const { front_default } = additionalPokemonInfo.sprites;
    const { types } = additionalPokemonInfo;
    return (
      <Card>
        <CardHeader
          avatar={
            <Avatar 
              className={classes.avatar} 
              src={front_default} 
            />
          }
          title={
            <Grid container>
              <Grid item xs={6}>
                <Typography variant="body1" align="left" className={classes.font}>
                  {name}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <CardActions classes={{ root: classes.cardActionsRoot }} disableSpacing>
                  <IconButton
                    onClick={() => this.handleOnToggle()}
                    aria-label="Show more"
                    className={classes.iconButton}
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
              </Grid>
            </Grid>
          }
          subheader={<PokemonType pokemonType={types} variant="column" title="Type: " />}
        />
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <div>
            <PokedexData additionalPokemonInfo={additionalPokemonInfo} />
          </div>
        </Collapse>
      </Card>
    );
  }
}

const styles = ({
  avatar: {
    width: 96,
    height: 96,
  },
  cardActionsRoot: {
    padding: 0,
    display: 'inherit',
    textAlign: 'right',
  },
  font: {
    height: 42,
  },
  iconButton: {
    margin: 'auto',
    padding: 0,
    marginRight: 15,
    marginTop: 5,
  },
})

export default withStyles(styles)(PokemonCardComp);