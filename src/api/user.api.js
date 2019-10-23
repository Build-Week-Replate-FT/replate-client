import { axiosWithAuth } from '../utils';
import qs from 'qs';

import { baseURL } from './config.api';

const handleUserResponse = userResponse => {
  console.log(userResponse);
  // localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('token', userResponse.data.access_token);
  axiosWithAuth(baseURL)
    .get('users/getuserinfo')
    .then(res => console.log(res))
    .catch(err => console.error(err));
  return userResponse;
};

const register = async user => {
  return await axiosWithAuth(baseURL)
    .post('api/users', user)
    .then(handleUserResponse);
};

const login = async credentials => {
  const loginQueryString = qs.stringify({
    grant_type: 'password',
    username: credentials.email,
    password: credentials.password,
  });
  return await axiosWithAuth(baseURL)
    .post('login', loginQueryString)
    .then(handleUserResponse);
};

const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

const getUser = () => {
  JSON.parse(localStorage.getItem('user'));
};

const getToken = () => {
  JSON.parse(localStorage.getItem('user'));
};

export { register, login, logout, getUser, getToken };
