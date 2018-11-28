import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {IconButton} from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import Select from 'react-select';

const styles = {
  root: {
    width: '100%',
    padding: 20
  },
  select: {
    width: '40%',
    float: 'left',
    height: 50,
    textAlign: 'left'
  },
  addButton: {
    width: '10%',
    float: 'left',
    height: 50,
    marginTop: -8
  },
  iconAdd: {
    height: 30,
    width: 30
  }
};

const ContentListItem = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Select 
        className={classes.select}
        options={props.options}
        onChange={props.onChange}
      />
      <IconButton onClick={props.onClick} className={classes.addButton}>
        <AddCircleIcon className={classes.iconAdd}/>
      </IconButton>
    </div>
  );
}

ContentListItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContentListItem);
