import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { authActionCreators } from "../actions";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  button: {
    margin: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  test: {
    width: "500px"
  }
}));

export function VolunteerSignUp() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const authentication = useSelector(state => state.authentication);
  const history = useHistory();

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: ""
  }); 

  const [ focused, setFocused ] = useState('');

  const [fieldTouched, setFieldTouched] = useState({
    name: false,
    email: false,
    password: false,
  })

  const [ errors, setErrors ] = useState({});

  const [disableButton, setDisableButton] = useState(true);

  const handleBlur = () => {
    setErrors({...errors, [focused]: focused === 'password' ? checkPassword() : checkReqField()});
  }

  const checkReqField = () => {
    if (!focused) {
      return;
    }
    const error = values[focused].length ? false : 'This field is required';
    return error
  }

  const checkPassword = () => {
    if (!focused) {
      return;
    }
    const error = values.password.length >= 6 ? false : 'Password must be at least 6 characters long';
    return error; 
  }

  const handleChange = name => event => {
    const value = event.target.value ;
    setValues({ ...values,  [name]: value });
    setErrors({...errors, [focused]: focused === 'password' ? checkPassword() : checkReqField()});
    
  };

  const handleFocus = event => {
    const name = event.target.name ? event.target.name : '';
    setFocused(name);
    setFieldTouched({...fieldTouched, [name]: true});
  }

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(
      authActionCreators.registerUser(
        { ...values, userType: "volunteer" },
        () => history.push("/")
      )
    );
    setValues({
      name: "",
      email: "",
      password: ""
    });
  };

  const checkErrors = () => {

  }

  useEffect(() => {
    if (Object.keys(errors).length) {
      if (Object.values(errors).filter(error => error).length) {
        setDisableButton(true);
      } else {
        setDisableButton(false);
      }
    }
  }, [focused])

  return (
    <Container className={classes.test}>
      <h1>Volunteer Sign Up</h1>
      <form
        className={classes.container}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <TextField
          label="Name"
          name = 'name'
          className={classes.textField}
          value={values.name}
          onChange={handleChange("name")}
          margin="normal"
          variant="outlined"
          required
          helperText={fieldTouched.name && errors.name}
          error={fieldTouched.name && Boolean(errors.name)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        <TextField
          type="email"
          name='email'
          label="Email"
          className={classes.textField}
          value={values.email}
          onChange={handleChange("email")}
          margin="normal"
          variant="outlined"
          helperText={fieldTouched.email && errors.email}
          error={fieldTouched.email && Boolean(errors.email)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        <TextField
          label="Password"
          name='password'
          type="password"
          className={classes.textField}
          value={values.password}
          onChange={handleChange("password")}
          margin="normal"
          variant="outlined"
          helperText={fieldTouched.password && errors.password}
          error={fieldTouched.password && Boolean(errors.password)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
          disabled={disableButton}
        >
          Sign Up
        </Button>
      </form>
    </Container>
  );
}
