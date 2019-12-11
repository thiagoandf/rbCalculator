import React from 'react';
import { Input, makeStyles } from '@material-ui/core';
import BaseButton from 'components/BaseButton';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#334051',
    height: '650px',
    width: '350px',
    borderRadius: '5px',
    padding: theme.spacing(2),
  },
  history: {
    width: '100%',
    height: '100px',
    backgroundColor: theme.palette.grey['400'],
  },
  input: {
    backgroundColor: theme.palette.grey['400'],
    height: '100px',
    width: '100%',
    textAlign: 'right',
    padding: theme.spacing(1),
  },
  inputClass: {
    color: 'transparent',
    textShadow: '0 0 0 #fff',
    fontSize: '45px',
    textAlign: 'right',
  },
  buttonsContainer: {
    marginTop: theme.spacing(2),
    width: '100%',
    height: 'calc(100% - 216px)',
    display: 'flex',
    flexDirection: 'column',
  },
  buttonRow: {
    padding: '10px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));

export default function Calculator(props) {
  const classes = useStyles(props);

  const [currentValue, setCurrentValue] = React.useState('0');

  const handleChange = value => {
    setCurrentValue(value);
  };

  return (
    <div className={classes.root}>
      <div className={classes.history} />
      <Input
        disableUnderline
        className={classes.input}
        autoFocus
        inputProps={{ style: { height: '100%' } }}
        classes={{
          input: classes.inputClass,
        }}
        value={currentValue}
        disabled
      />
      <div className={classes.buttonsContainer}>
        <div className={classes.buttonRow}>
          <BaseButton
            color="lightGrey"
            value="C"
            textColor="black"
            onClick={() => handleChange('C')}
          />
          <BaseButton
            color="lightGrey"
            value="√"
            textColor="black"
            onClick={() => handleChange('sqrt')}
          />
          <BaseButton
            color="lightGrey"
            value="⇽"
            textColor="black"
            onClick={() => handleChange('back')}
          />
          <BaseButton
            color="orange"
            value="÷"
            onClick={() => handleChange('/')}
          />
        </div>
        <div className={classes.buttonRow}>
          <BaseButton color="grey" value="7" />
          <BaseButton color="grey" value="8" />
          <BaseButton color="grey" value="9" />
          <BaseButton color="orange" value="×" />
        </div>
        <div className={classes.buttonRow}>
          <BaseButton color="grey" value="4" />
          <BaseButton color="grey" value="5" />
          <BaseButton color="grey" value="6" />
          <BaseButton color="orange" value="-" />
        </div>
        <div className={classes.buttonRow}>
          <BaseButton color="grey" value="1" />
          <BaseButton color="grey" value="2" />
          <BaseButton color="grey" value="3" />
          <BaseButton color="orange" value="+" />
        </div>
        <div className={classes.buttonRow}>
          <BaseButton width="135px" color="grey" value="0" />
          <BaseButton color="grey" value="." />
          <BaseButton color="orange" value="=" />
        </div>
      </div>
    </div>
  );
}

Calculator.propTypes = {};
