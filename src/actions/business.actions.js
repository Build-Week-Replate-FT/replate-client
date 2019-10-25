import { createPickup } from '../api';
import { CREATE_PICKUP_REQUEST, CREATE_PICKUP_SUCCESS, CREATE_PICKUP_FAILURE } from '../actions.types';

const createPickupAction = pickup => async dispatch => {
  dispatch({ type: CREATE_PICKUP_REQUEST });
  createPickup(pickup)
    .then(pickupResponse => {
      console.log(pickupResponse);
      dispatch({
        type: CREATE_PICKUP_SUCCESS,
      });
      dispatch({
        type: `UPDATE_PICKUPS`,
        payload: pickupResponse.data.business.businesspickups,
      });
    })
    .catch(error => {
      console.log('failed create pickup', error);
      console.error(error);
      dispatch({ type: CREATE_PICKUP_FAILURE, payload: error });
    });
};

export const businessActionCreators = {
  createPickupAction,
};
