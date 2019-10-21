import axios from 'axios';

export const axiosWithAuth = baseURL => {
  const token = localStorage.getItem('token');
  return axios.create({
    baseURL,
    headers: {
      Authorization: token,
    },
  });
};
