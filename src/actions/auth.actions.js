import { register, login, logout } from "../api";

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
    email,
    name,
    password,
    address,
    city,
    state,
    zip
  };

  dispatch({ type: REGISTER_REQUEST });

  register(user, userType)
    .then(registerUserResponse => {
      dispatch({ type: REGISTER_SUCCESS, payload: registerUserResponse });
      redirect && redirect();
    })
    .catch(error => {
      console.error(error);
      dispatch({ type: REGISTER_FAILURE, payload: error });
    });
};

const loginUser = ({ email, password }, redirect) => async dispatch => {
  dispatch({ type: LOGIN_REQUEST });
  login({ email, password })
    .then(loginResponse => {
      dispatch({ type: LOGIN_SUCCESS, payload: loginResponse });
      redirect && redirect();
    })
    .catch(error => {
      console.error(error);
      dispatch({ type: LOGIN_FAILURE, payload: error });
    });
};

const logoutUser = redirect => dispatch => {
  logout();
  dispatch({ type: LOGOUT });
  redirect && redirect();
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
  registerUser,
  loginUser,
  logoutUser
};
