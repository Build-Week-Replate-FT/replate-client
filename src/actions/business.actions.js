import { createPickup } from '../api';

const FETCH_PICKUPS_REQUEST = `FETCH_PICKUPS_REQUEST`;
const FETCH_PICKUPS_SUCCESS = `FETCH_PICKUPS_SUCCESS`;
const FETCH_PICKUPS_FAILURE = `FETCH_PICKUPS_FAILURE`;
const CREATE_PICKUP_REQUEST = `CREATE_PICKUP_REQUEST`;
const CREATE_PICKUP_SUCCESS = `CREATE_PICKUP_SUCCESS`;
const CREATE_PICKUP_FAILURE = `CREATE_PICKUP_FAILURE`;

const createPickupAction = pickup => async dispatch => {
  dispatch({ type: CREATE_PICKUP_REQUEST });
  createPickup(pickup)
    .then(pickupResponse => {
      console.log(pickupResponse);
      dispatch({ type: CREATE_PICKUP_SUCCESS, payload: pickupResponse.data });
    })
    .catch(error => {
      console.log('failed create pickup', error);
      console.error(error);
      dispatch({ type: CREATE_PICKUP_FAILURE, payload: error });
    });
};

export const businessActionTypes = {
  FETCH_PICKUPS_REQUEST,
  FETCH_PICKUPS_SUCCESS,
  FETCH_PICKUPS_FAILURE,
  CREATE_PICKUP_REQUEST,
  CREATE_PICKUP_SUCCESS,
  CREATE_PICKUP_FAILURE,
};

export const businessActionCreators = {
  createPickupAction,
};
