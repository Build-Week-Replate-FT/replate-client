import { pickups, claim } from '../api';

const UPDATE_PICKUPS = `UPDATE_PICKUPS`;

const FETCH_PICKUPS_REQUEST = `FETCH_PICKUPS_REQUEST`;
const FETCH_PICKUPS_SUCCESS = `FETCH_PICKUPS_SUCCESS`;
const FETCH_PICKUPS_FAILURE = `FETCH_PICKUPS_FAILURE`;

const CLAIM_PICKUPS_REQUEST = `CLAIM_PICKUPS_REQUEST`;
const CLAIM_PICKUPS_SUCCESS = `CLAIM_PICKUPS_SUCCESS`;
const CLAIM_PICKUPS_FAILURE = `CLAIM_PICKUPS_FAILURE`;

const fetchPickups = () => async dispatch => {
  dispatch({ type: FETCH_PICKUPS_REQUEST });
  pickups()
    .then(pickupsResponse => {
      console.log(pickupsResponse);
      dispatch({ type: FETCH_PICKUPS_SUCCESS, payload: pickupsResponse });
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: FETCH_PICKUPS_FAILURE, payload: error });
    });
};

const claimPickup = (pickupID, volunteerID) => async dispatch => {
  dispatch({ type: CLAIM_PICKUPS_REQUEST });
  claim(pickupID, volunteerID)
    .then(claimPickupResponse => {
      console.log(claimPickupResponse);
      dispatch({ type: CLAIM_PICKUPS_SUCCESS, payload: claimPickupResponse.data });
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: CLAIM_PICKUPS_FAILURE, payload: error });
    });
};

export const pickupsActionTypes = {
  UPDATE_PICKUPS,
  FETCH_PICKUPS_REQUEST,
  FETCH_PICKUPS_SUCCESS,
  FETCH_PICKUPS_FAILURE,
  CLAIM_PICKUPS_REQUEST,
  CLAIM_PICKUPS_SUCCESS,
  CLAIM_PICKUPS_FAILURE,
};

export const pickupsActionCreators = {
  fetchPickups,
  claimPickup,
};
