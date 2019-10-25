import { axiosWithAuth } from '../utils';

import { baseURL } from './config.api';

const handlePickups = pickupsResponse => {
  console.log(pickupsResponse);
  const { userType } = pickupsResponse.data;
  return pickupsResponse.data[userType][`${userType}pickups`];
};

const pickups = async () => {
  return await axiosWithAuth(baseURL)
    .get('users/mine')
    .then(handlePickups);
};

export { pickups };
