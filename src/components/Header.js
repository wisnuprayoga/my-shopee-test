import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {deepOrange} from '@material-ui/core/colors';

const styles = {
  root: {
    flexGrow: 1,
    position:'fixed',
    top:0,
    width:'100%'
  },
  headerBar: {
    backgroundColor: deepOrange['500']
  }
};

const SimpleAppBar = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.headerBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Shoope Test
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
