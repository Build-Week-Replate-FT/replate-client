import axios from 'axios';
import { getToken } from '../api';

export function axiosWithAuth(baseURL, token) {
  token = token
    ? `Bearer ${token}`
    : getToken()
    ? `Bearer ${getToken()}`
    : `Basic ${btoa('lambda-client:lambda-secret')}`;
  console.log('axiosWithAuth', token);
  const client = axios.create({
    baseURL,
    headers: {
      Authorization: token,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  return client;
}
