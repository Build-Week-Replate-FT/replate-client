import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { useDispatch } from "react-redux";
import { authActionCreators } from "../actions";
import { useHistory } from "react-router-dom";

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

export function BusinessSignUp() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    website: "",
  });

  const [ focused, setFocused ] = useState('');

  const [fieldTouched, setFieldTouched] = useState({
    name: false,
    email: false,
    password: false,
    address: false,
    city: false,
    state: false,
    zip: false,
  })

  const [ errors, setErrors ] = useState({});

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
    const error = values.password.length >= 6 ? false : 'Password must me at least 6 characters long';
    return error; 
  }

  const handleChange = name => event => {
    const value = event.target.value ;
    setValues({ ...values,  [name]: value });
  };

  const handleFocus = event => {
    const name = event.target.name ? event.target.name : '';
    setFocused(name);
    setFieldTouched({...fieldTouched, [name]: true});
  }
  
  const handleSubmit = event => {
    event.preventDefault();

    dispatch(
      authActionCreators.registerUser({ ...values, userType: "business" }, () =>
        history.push("/")
      )
    );
    setValues({
      name: "",
      email: "",
      password: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      website: ""
    });
  };

  return (
    <Container className={classes.test}>
      <h1>Business Sign Up</h1>
      <form
        className={classes.container}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <TextField
          label="Business Name"
          name='name'
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
          label="Email"
          name='email'
          className={classes.textField}
          value={values.email}
          onChange={handleChange("email")}
          margin="normal"
          variant="outlined"
          required
          helperText={fieldTouched.email && errors.email}
          error={fieldTouched.email && Boolean(errors.email)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        <TextField
          label="Password"
          type="password"
          name='password'
          className={classes.textField}
          value={values.password}
          onChange={handleChange("password")}
          margin="normal"
          variant="outlined"
          required
          helperText={fieldTouched.password && errors.password}
          error={fieldTouched.password && Boolean(errors.password)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        <TextField
          label="Address"
          name='address'
          type="text"
          className={classes.textField}
          value={values.address}
          onChange={handleChange("address")}
          margin="normal"
          variant="outlined"
          required
          helperText={fieldTouched.address && errors.address}
          error={fieldTouched.address && Boolean(errors.address)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        <TextField
          label="City"
          name='city'
          type="text"
          className={classes.textField}
          value={values.city}
          onChange={handleChange("city")}
          margin="normal"
          variant="outlined"
          required
          helperText={fieldTouched.city && errors.city}
          error={fieldTouched.city && Boolean(errors.city)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        <TextField
          label="State"
          name='state'
          type="text"
          className={classes.textField}
          value={values.state}
          onChange={handleChange("state")}
          margin="normal"
          variant="outlined"
          required
          helperText={fieldTouched.state && errors.state}
          error={fieldTouched.state && Boolean(errors.state)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        <TextField
          label="Zip"
          name='zip'
          type="text"
          className={classes.textField}
          value={values.zip}
          onChange={handleChange("zip")}
          margin="normal"
          variant="outlined"
          required
          helperText={fieldTouched.zip && errors.zip}
          error={fieldTouched.zip && Boolean(errors.zip)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        <TextField
          label="Website"
          type="text"
          className={classes.textField}
          value={values.website}
          onChange={handleChange("website")}
          margin="normal"
          variant="outlined"
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Sign Up
        </Button>
      </form>
    </Container>
  );
}
