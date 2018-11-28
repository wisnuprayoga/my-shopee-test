import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

const styles = {
  root: {
    width: '100%',
  },
  paper: {
    padding: 12
  }
};

const ContentList = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <List>
        {props.children}
      </List>
    </div>
  );
}

ContentList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContentList);
