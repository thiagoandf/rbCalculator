import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, ButtonBase } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: props => {
      if (props.color === 'grey') return theme.palette.grey['500'];
      if (props.color === 'orange') return '#FFA142';
      return '#eeeeee';
    },
    height: props => props.height,
    width: props => props.width,
    borderRadius: '30px',
    color: props => theme.palette.common[props.textColor],
    fontSize: '26px',
  },
}));

export default function BaseButton(props) {
  const classes = useStyles(props);

  return (
    <ButtonBase onClick={() => props.onClick()} className={classes.root}>
      {props.value}
    </ButtonBase>
  );
}

BaseButton.defaultProps = {
  width: '60px',
  height: '60px',
  textColor: 'white',
  color: 'grey',
};

BaseButton.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(['grey', 'orange', 'lightGrey']),
  textColor: PropTypes.oneOf(['white', 'black']),
};
