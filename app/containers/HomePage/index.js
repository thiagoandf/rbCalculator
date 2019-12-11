import React from 'react';
import { makeStyles } from '@material-ui/core';
import Calculator from 'components/Calculator';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.common.white,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default function HomePage(props) {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Calculator />
    </div>
  );
}
