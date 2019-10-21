import { axiosWithAuth } from '../utils';
import { userConstants } from '../actions';

const {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} = userConstants;

export const userAPI = {
  register,
  login,
  logout,
};

async function register(
  { userType, email, name, password, address = '', city = '', state = '', zip = '' },
  dispatch,
  redirect
) {
  // create a user object to register with backend service.
  // the register function accepts all possible fields for creating a user
  // but defaults the optional properties to empty strings
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

  // start the request
  dispatch.request({ type: REGISTER_REQUEST });
  try {
    // on successful registration, store the user in local state and send out the registration success action
    const registeredUser = await axiosWithAuth('baseURL').post('/register', user);
    dispatch.success({ type: REGISTER_SUCCESS, payload: registeredUser });
    localStorage.setItem('user', registeredUser);
    redirect && redirect();
  } catch (error) {
    // on a failed registration, send out the registration failed action
    dispatch.failure({ type: REGISTER_FAILURE, payload: error });
  }
}

async function login({ email, password }, dispatch, redirect) {
  // take the user's credentials and make a POST request to the backend service to authenticate the user
  const credentials = { email, password };

  // start the login request
  dispatch.request({ type: LOGIN_REQUEST });
  try {
    const successfulLogin = await axiosWithAuth('baseURL').post('/login', credentials);
    dispatch.success({ type: LOGIN_SUCCESS, payload: successfulLogin });
    localStorage.setItem('user', successfulLogin);
    redirect && redirect();
  } catch (error) {
    dispatch.failure({ type: LOGIN_FAILURE, payload: error });
  }
}

function logout(redirect) {
  // remove the user object from localStorage
  localStorage.removeItem('user');
  redirect && redirect();
}
