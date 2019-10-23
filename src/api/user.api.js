import { axiosWithAuth } from '../utils';
import qs from 'qs';

import { baseURL } from './config.api';

const handleUserResponse = (token, userInfo) => {
  localStorage.setItem('user', JSON.stringify(userInfo.data));
  localStorage.setItem('token', token);
  return userInfo.data;
};

const getUserInfo = async userResponse => {
  const token = userResponse.data.access_token;
  return await axiosWithAuth(baseURL, token)
    .get(`users/mine`)
    .then(userInfo => handleUserResponse(token, userInfo));
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
    .then(getUserInfo);
};

const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

const getUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

const getToken = () => {
  return localStorage.getItem('token');
};

export { register, login, logout, getUser, getToken };
