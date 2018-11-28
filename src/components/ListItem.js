import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {ListItem, ListItemSecondaryAction, IconButton, Divider} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import NumberFormat from 'react-number-format';

const styles = {
  root: {
    width: '100%',
  },
  paper: {
    padding: 12
  },
  infoBox: {
    width:'90%'
  },
  currCode: {
    fontSize: 24,
    fontWeight: 'bold',
    width: '50%',
    float: 'left'
  },
  currValue: {
    fontSize: 24,
    fontWeight: 'bold',
    width: '50%',
    float: 'left',
    textAlign: 'right'
  },
  currName: {
    fontSize: 16,
    fontWeight: 'bold'
  }
};

const ContentListItem = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <ListItem>
        <div className={classes.infoBox}>
          <div>
            <div className={classes.currCode}>{props.code}</div>
            <div className={classes.currValue}>
              <NumberFormat value={props.value} displayType={'text'} thousandSeparator={true} fixedDecimalScale={true} decimalScale={3} />
            </div>
          </div>
          <div className={classes.currName}>
            {props.name}
          </div>
          <div className={classes.currRate}>
            <span> 1 USD = </span>
            <span>
              {props.code} {' '}
              <NumberFormat value={props.rate} displayType={'text'} thousandSeparator={true} fixedDecimalScale={true} decimalScale={2} />
            </span>
          </div>
        </div>
        <ListItemSecondaryAction className={classes.deleteIcon}>
          <IconButton onClick={props.onClick} aria-label="Comments">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </div>
  );
}

ContentListItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContentListItem);
