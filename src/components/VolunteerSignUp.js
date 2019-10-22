import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
		display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column'
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
  menu: {
    width: 200,
  },
}));

export function VolunteerSignUp() {
  const classes = useStyles();

  const [ values, setValues ] = useState({
    name: '',
    email: '',
    password:  ''
  });

  const handleChange = name => event => {
    setValues({...values, [ name ]: event.target.value});
  } 

  const handleSubmit = event => {
    event.preventDefault();
    console.log(values)
    setValues({
      name: '',
      email: '',
      password:  ''
    })
  }

  return (
    <>
        <h1>Volunteer Sign Up</h1>
        <form className={classes.container} onSubmit={handleSubmit} noValidate autoComplete="off">
          <TextField
            label="Name"
            className={classes.textField}
            value={values.name}
            onChange={handleChange('name')}
            margin="normal"
            variant="outlined"
          />

          <TextField
            type='email'
            label="Email"
            className={classes.textField}
            value={values.email}
            onChange={handleChange('email')}
            margin="normal"
            variant="outlined"
          />
          
          <TextField
            label="Password"
            type='password'
            className={classes.textField}
            value={values.password}
            onChange={handleChange('password')}
            margin="normal"
            variant="outlined"
          />

          <Button type='submit' variant="contained" color="primary" className={classes.button}>
            Submit
          </Button>
        </form>
    </>
  );
}
