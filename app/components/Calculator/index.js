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
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1),
    fontSize: '25px',
    color: 'white',
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
  const [mem, setMem] = React.useState({ operator: '', value: '' });

  // const parser = str => Function(`'use strict'; return (${str})`)();

  const handleChange = value => {
    if (value.match(/^[0-9]*$/g)) {
      handleNumeric(value);
      return;
    }
    if (value.match(/[/*\-+=]|sqrt/g)) {
      handleOperation(value);
      return;
    }
    if (value === '.' && !currentValue.includes('.')) {
      setCurrentValue(currentValue + value);
      return;
    }
    if (value === 'back') {
      if (currentValue.length === 1) setCurrentValue('0');
      else setCurrentValue(currentValue.slice(0, -1));
      return;
    }
    if (value === 'C') {
      setCurrentValue('0');
      setMem({ value: '', operator: '' });
    }
  };

  const handleNumeric = value => {
    if (currentValue.length === 1 && currentValue === '0') {
      setCurrentValue(value);
      return;
    }
    setCurrentValue(`${currentValue}${value}`);
  };

  const handleOperation = value => {
    if (mem.value && mem.operator !== value) {
      handleOperation(mem.operator);
    }
    if (mem.value && value === '=') {
      setMem({
        operator: '',
        value: '',
      });
      setCurrentValue(
        // eslint-disable-next-line no-eval
        eval(`${mem.value} ${mem.operator} ${currentValue}`).toString(),
      );
      return;
    }
    if (!mem.value && value === '=') return;
    if (value === 'sqrt') {
      setCurrentValue(
        Math.sqrt(parseFloat(currentValue))
          .toFixed(3)
          .toString(),
      );
      return;
    }
    setMem({
      operator: value,
      // eslint-disable-next-line no-eval
      value: eval(`${mem.value} ${mem.operator} ${currentValue}`),
    });
    setCurrentValue('0');
  };

  return (
    <div className={classes.root}>
      <div className={classes.history}>
        {mem.value}&nbsp;{mem.operator}
      </div>
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
          <BaseButton
            color="grey"
            value="7"
            onClick={() => handleChange('7')}
          />
          <BaseButton
            color="grey"
            value="8"
            onClick={() => handleChange('8')}
          />
          <BaseButton
            color="grey"
            value="9"
            onClick={() => handleChange('9')}
          />
          <BaseButton
            color="orange"
            value="×"
            onClick={() => handleChange('*')}
          />
        </div>
        <div className={classes.buttonRow}>
          <BaseButton
            color="grey"
            value="4"
            onClick={() => handleChange('4')}
          />
          <BaseButton
            color="grey"
            value="5"
            onClick={() => handleChange('5')}
          />
          <BaseButton
            color="grey"
            value="6"
            onClick={() => handleChange('6')}
          />
          <BaseButton
            color="orange"
            value="-"
            onClick={() => handleChange('-')}
          />
        </div>
        <div className={classes.buttonRow}>
          <BaseButton
            color="grey"
            value="1"
            onClick={() => handleChange('1')}
          />
          <BaseButton
            color="grey"
            value="2"
            onClick={() => handleChange('2')}
          />
          <BaseButton
            color="grey"
            value="3"
            onClick={() => handleChange('3')}
          />
          <BaseButton
            color="orange"
            value="+"
            onClick={() => handleChange('+')}
          />
        </div>
        <div className={classes.buttonRow}>
          <BaseButton
            width="135px"
            color="grey"
            value="0"
            onClick={() => handleChange('0')}
          />
          <BaseButton
            color="grey"
            value="."
            onClick={() => handleChange('.')}
          />
          <BaseButton
            color="orange"
            value="="
            onClick={() => handleChange('=')}
          />
        </div>
      </div>
    </div>
  );
}

Calculator.propTypes = {};
