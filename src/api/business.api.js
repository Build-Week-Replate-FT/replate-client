import { axiosWithAuth } from '../utils';
import { baseURL } from './config.api';

const handlePickupResponse = async pickupResponse => {
  return await axiosWithAuth(baseURL).get('users/mine');
};

const createPickup = async pickup => {
  console.log(baseURL + 'pickups/add');
  return await axiosWithAuth(baseURL)
    .post('pickups/add', pickup)
    .then(handlePickupResponse);
};

export { createPickup };
