import React, { useState } from "react";
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
    website: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

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
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Business Name"
          className={classes.textField}
          value={values.name}
          onChange={handleChange("name")}
          margin="normal"
          variant="outlined"
        />

        <TextField
          type="email"
          label="Email"
          className={classes.textField}
          value={values.email}
          onChange={handleChange("email")}
          margin="normal"
          variant="outlined"
        />

        <TextField
          label="Password"
          type="password"
          className={classes.textField}
          value={values.password}
          onChange={handleChange("password")}
          margin="normal"
          variant="outlined"
        />

        <TextField
          label="Address"
          type="text"
          className={classes.textField}
          value={values.address}
          onChange={handleChange("address")}
          margin="normal"
          variant="outlined"
        />

        <TextField
          label="City"
          type="text"
          className={classes.textField}
          value={values.city}
          onChange={handleChange("city")}
          margin="normal"
          variant="outlined"
        />

        <TextField
          label="State"
          type="text"
          className={classes.textField}
          value={values.state}
          onChange={handleChange("state")}
          margin="normal"
          variant="outlined"
        />

        <TextField
          label="Zip"
          type="text"
          className={classes.textField}
          value={values.zip}
          onChange={handleChange("zip")}
          margin="normal"
          variant="outlined"
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
