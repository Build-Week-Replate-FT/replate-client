import { axiosWithAuth } from '../utils';
import { userActions } from '../actions';

const {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} = userActions;

async function register(
  { userType, email, name, password, address = '', city = '', state = '', zip = '' },
  dispatch,
  redirect
) {
  const user = {
    userType,
    email,
    name,
    password,
    address,
    city,
    state,
    zip,
  };

  dispatch.request({ type: REGISTER_REQUEST });
  try {
    const registeredUser = await axiosWithAuth('https://jsonplaceholder.typicode.com').post('/users', user);
    dispatch.success({ type: REGISTER_SUCCESS, payload: registeredUser });
    // localStorage.setItem('token', registeredUser.token);
    // localStorage.setItem('user', JSON.stringify(registeredUser.userData));
    redirect && redirect();
  } catch (error) {
    dispatch.failure({ type: REGISTER_FAILURE, payload: error });
  }
}

async function login({ email, password }, dispatch, redirect) {
  const credentials = { email, password };

  dispatch.request({ type: LOGIN_REQUEST });
  try {
    const successfulLogin = await axiosWithAuth('baseURL').post('/login', credentials);
    dispatch.success({ type: LOGIN_SUCCESS, payload: successfulLogin });
    // localStorage.setItem('token', successfulLogin.token);
    // localStorage.setItem('user', JSON.stringify(successfulLogin.userData));
    redirect && redirect();
  } catch (error) {
    dispatch.failure({ type: LOGIN_FAILURE, payload: error });
  }
}

function logout(redirect) {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  redirect && redirect();
}

function getToken() {
  return localStorage.getItem('token');
}

function getUser() {
  JSON.parse(localStorage.getItem('user'));
}

export { register, login, logout, getToken, getUser };
