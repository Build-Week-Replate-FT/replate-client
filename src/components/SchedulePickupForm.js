import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';

const useStyles = makeStyles(theme => ({
  container: {
    padding: '10px',
    boxShadow: '0 0 20px grey',
    borderRadius: '5px',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  test: {
    width: '600px',
    borderRadius: '5px',
    backgroundColor: 'white',
  },
  formWindow: {
    borderRadius: '5px',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
  },
}));

export function SchedulePickupForm({ scheduling, setScheduling, user }) {
  const classes = useStyles();

  const [values, setValues] = useState({
    foodType: '',
    qty: '',
    unit: '',
  });

  const [selectedDate, setSelectedDate] = React.useState();

  const handleDateChange = date => {
    setSelectedDate(date);
    console.log(date);
  };

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const { foodType, qty, unit } = values;
    const formData = {
      foodtype: foodType,
      quantity: qty,
      quantityunit: unit,
      deliveryaddress: user.address,
      deliverycity: user.city,
      deliverystate: user.state,
      zip: user.zip,
      business: {
        userid: user.userid,
      },
    };
    console.log(formData);
    // make post request here
    setValues({
      foodType: '',
      qty: '',
      unit: '',
    });
  };

  return (
    <Container onClick={() => setScheduling(!scheduling)} className={classes.formWindow}>
      <Box onClick={event => event.stopPropagation()} className={classes.test}>
        <form className={classes.container} onSubmit={handleSubmit} noValidate autoComplete='off'>
          <h1>Schedule Pickup</h1>
          <TextField
            type='text'
            label='Food'
            className={classes.textField}
            value={values.foodType}
            onChange={handleChange('foodType')}
            margin='normal'
            variant='outlined'
          />

          <TextField
            label='Quantity'
            type='text'
            className={classes.textField}
            value={values.qty}
            onChange={handleChange('qty')}
            margin='normal'
            variant='outlined'
          />

          <TextField
            label='Unit'
            type='text'
            className={classes.textField}
            value={values.unit}
            onChange={handleChange('unit')}
            margin='normal'
            variant='outlined'
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify='space-around'>
              <KeyboardDatePicker
                disableToolbar
                variant='inline'
                format='MM/dd/yyyy'
                margin='normal'
                id='date-picker-inline'
                label='Date picker inline'
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />

              <KeyboardTimePicker
                margin='normal'
                id='time-picker'
                label='Time picker'
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
          <Button type='submit' variant='contained' color='primary' className={classes.button}>
            Schedule Pickup
          </Button>
        </form>
      </Box>
    </Container>
  );
}
