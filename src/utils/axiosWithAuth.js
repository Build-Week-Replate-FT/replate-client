import axios from 'axios';
import { getToken } from '../api';

export function axiosWithAuth(baseURL) {
  const token = getToken() || btoa('lambda-client:lambda-secret');
  const client = axios.create({
    baseURL,
    headers: {
      Authorization: `Basic bGFtYmRhLWNsaWVudDpsYW1iZGEtc2VjcmV0`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  return client;
}
