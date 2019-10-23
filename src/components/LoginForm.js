import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { useDispatch } from 'react-redux';
import { authActionCreators } from '../actions';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  container: {
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
    width: '500px',
  },
}));

export function LoginForm() {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = event => {
    // volunteer
    // lucy@lambdaschool.local
    // password: 1234567

    // business
    // business@lambdaschool.local
    // password
    event.preventDefault();

    dispatch(
      authActionCreators.loginUser({ email: 'business@lambdaschool.local', password: 'password' }, () =>
        history.push('/volunteer')
      )
    );
    setValues({
      email: '',
      password: '',
    });
  };

  return (
    <Container className={classes.test}>
      <h1>Log In</h1>
      <form className={classes.container} onSubmit={handleSubmit} noValidate autoComplete='off'>
        <TextField
          type='email'
          label='Email'
          className={classes.textField}
          value={values.email}
          onChange={handleChange('email')}
          margin='normal'
          variant='outlined'
        />

        <TextField
          label='Password'
          type='password'
          className={classes.textField}
          value={values.password}
          onChange={handleChange('password')}
          margin='normal'
          variant='outlined'
        />

        <Button type='submit' variant='contained' color='primary' className={classes.button}>
          Log In
        </Button>
      </form>
    </Container>
  );
}
