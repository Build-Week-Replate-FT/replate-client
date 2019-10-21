import { axiosWithAuth } from '../utils';

export const userAPI = {
  register,
  login,
  logout,
};

async function register({ userType, email, name, password, address = '', city = '', state = '', zip = '' }) {
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
  return await await axiosWithAuth('baseURL').post('/register', user);
}

async function login({ email, password }) {
  // take the user's credentials and make a POST request to the backend service to authenticate the user
  const credentials = { email, password };
  return await await axiosWithAuth('baseURL').post('/login', credentials);
}

function logout() {
  // remove the user object from localStorage
  localStorage.removeItem('user');
}
