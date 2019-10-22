import axios from 'axios';
import { getToken } from '../api';

export function axiosWithAuth(baseURL) {
  const token = getToken();
  return axios.create({
    baseURL,
    headers: {
      Authorization: token,
    },
  });
}
