import { axiosWithAuth } from '../utils';

import { baseURL } from './config.api';

const handleUserResponse = (user, token) => {
  console.log(user, token);
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('token', token);
  return user;
};

const register = async user => {
  return await axiosWithAuth(baseURL)
    .post('api/users', user)
    .then(handleUserResponse);
};

const login = async credentials => {
  return await axiosWithAuth(baseURL)
    .post('api/login', credentials)
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
