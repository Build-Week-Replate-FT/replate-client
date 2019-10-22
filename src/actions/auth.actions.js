import { register } from "../api";

const REGISTER_REQUEST = "USERS_REGISTER_REQUEST";
const REGISTER_SUCCESS = "USERS_REGISTER_SUCCESS";
const REGISTER_FAILURE = "USERS_REGISTER_FAILURE";

const LOGIN_REQUEST = "USERS_LOGIN_REQUEST";
const LOGIN_SUCCESS = "USERS_LOGIN_SUCCESS";
const LOGIN_FAILURE = "USERS_LOGIN_FAILURE";

const LOGOUT = "USERS_LOGOUT";

const registerUser = (
  {
    userType,
    email,
    name,
    password,
    address = "",
    city = "",
    state = "",
    zip = ""
  },
  redirect
) => async dispatch => {
  const user = {
    // userType,
    email,
    // name,
    password
    // address,
    // city,
    // state,
    // zip,
  };

  dispatch({ type: REGISTER_REQUEST });

  register(user)
    .then(registerUserResponse => {
      console.log(registerUserResponse);
      dispatch({ type: REGISTER_SUCCESS, payload: registerUserResponse });
      // localStorage.setItem('token', registeredUser.token);
      // localStorage.setItem('user', JSON.stringify(registeredUser.userData));
      redirect && redirect();
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: REGISTER_FAILURE, payload: error });
    });
};

export const authActionTypes = {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
};

export const authActionCreators = {
  registerUser
};
