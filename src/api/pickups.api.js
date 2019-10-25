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

const claim = async (pickupID, volunteerID) => {
  console.log(baseURL + `pickups/${pickupID}/${volunteerID}`);
  return await axiosWithAuth(baseURL).post(`pickups/${pickupID}/${volunteerID}`, {});
};

export { pickups, claim };
