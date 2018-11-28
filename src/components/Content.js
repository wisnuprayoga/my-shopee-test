import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Grid, Card} from '@material-ui/core'

const styles = {
  root: {
    flexGrow: 1,
    width:'100%',
    height:'100%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  paper: {
    overflow: 'inherit',
    height: '100%'
  }
};

const Content = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item md={3}></Grid>
        <Grid item md={6}>
          <Card className={classes.paper}>
            {props.children}
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
