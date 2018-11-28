import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {deepOrange} from '@material-ui/core/colors';
import {Grid} from '@material-ui/core'
import NumberFormat from 'react-number-format';

const styles = {
  contentHeader: {
    backgroundColor: deepOrange['300'],
    padding: 12,
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#ffffff'
  },
  headerTitle: {
    paddingBottom: 12,
    fontSize: 24,
  },
  headerPrefix: {
    textAlign: 'left',
    fontSize: 20
  },
  headerValue: {
    textAlign: 'right',
    fontSize: 20
  },
  headerInput: {
    height: 30,
    fontSize: 18,
    paddingLeft: 12,
    fontWeight: 'bold'
  }
};

const ContentHeader = (props) => {
  const { classes } = props;

  return (
    <Grid container className={classes.contentHeader}>
      <Grid className={classes.headerTitle} item md={12}>
        USD - United State Dollar
      </Grid>
      <Grid className={classes.headerPrefix} item md={6}>
        USD
      </Grid>
      <Grid className={classes.headerValue} item md={6}>
        <NumberFormat 
          className={classes.headerInput} 
          onValueChange={props.onChange} 
          value={props.value} 
          thousandSeparator={true} 
          prefix={'$ '} 
          fixedDecimalScale={true} decimalScale={0} 
        />
      </Grid>
    </Grid>
  );
}

ContentHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContentHeader);
