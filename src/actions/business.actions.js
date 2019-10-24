const FETCH_PICKUPS_REQUEST = `FETCH_PICKUPS_REQUEST`;
const FETCH_PICKUPS_SUCCESS = `FETCH_PICKUPS_SUCCESS`;
const FETCH_PICKUPS_FAILURE = `FETCH_PICKUPS_FAILURE`;
const CREATE_PICKUP_REQUEST = `CREATE_PICKUP_REQUEST`;
const CREATE_PICKUP_SUCCESS = `CREATE_PICKUP_SUCCESS`;
const CREATE_PICKUP_FAILURE = `CREATE_PICKUP_FAILURE`;

const createPickup = pickup => async dispatch => {
  dispatch({ type: CREATE_PICKUP_REQUEST });
  // post.then(success).catch(error)
};

export const businessActionTypes = {
  FETCH_PICKUPS_REQUEST,
  FETCH_PICKUPS_SUCCESS,
  FETCH_PICKUPS_FAILURE,
  CREATE_PICKUP_REQUEST,
  CREATE_PICKUP_SUCCESS,
  CREATE_PICKUP_FAILURE,
};
