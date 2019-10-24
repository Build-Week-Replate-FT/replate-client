import { axiosWithAuth } from '../utils';
import { baseURL } from './config.api';
import qs from 'qs';

const createPickup = async pickup => {
  const loginQueryString = qs.stringify({
    grant_type: 'password',
    ...pickup,
  });
  const t = JSON.stringify(pickup);

  console.log(baseURL + 'pickups/add');
  return await axiosWithAuth(baseURL).post('pickups/add', pickup);
};

export { createPickup };
