import axios from 'axios';
import { getToken } from '../api';

export function axiosWithAuth(baseURL) {
  const token = getToken() ? `Bearer ${getToken()}` : `Basic ${btoa('lambda-client:lambda-secret')}`;
  const client = axios.create({
    baseURL,
    headers: {
      Authorization: token,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  return client;
}
