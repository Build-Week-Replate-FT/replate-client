import axios from 'axios';
import { getToken } from '../api';

export function axiosWithAuth(baseURL, token) {
  token = token
    ? `Bearer ${token}`
    : getToken()
    ? `Bearer ${getToken()}`
    : `Basic ${btoa('lambda-client:lambda-secret')}`;

  const contentType = getToken() ? 'application/json' : 'application/x-www-form-urlencoded';
  const client = axios.create({
    baseURL,
    headers: {
      Authorization: token,
      'Content-Type': contentType,
    },
  });
  return client;
}
