import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {CircularProgress} from '@material-ui/core'

const styles = {
  root: {
    flexGrow: 1,
    width:'100%',
    height:'100%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
};

const Loading = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <CircularProgress/>
    </div>
  );
}

Loading.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Loading);
