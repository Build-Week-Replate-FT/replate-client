import { pickupsActionTypes } from '../actions';

const {
  UPDATE_PICKUPS,
  FETCH_PICKUPS_REQUEST,
  FETCH_PICKUPS_SUCCESS,
  FETCH_PICKUPS_FAILURE,
  CLAIM_PICKUPS_REQUEST,
  CLAIM_PICKUPS_SUCCESS,
  CLAIM_PICKUPS_FAILURE,
} = pickupsActionTypes;

const initialState = {
  pickups: [],
};

export function pickups(state = initialState, action) {
  switch (action.type) {
    case FETCH_PICKUPS_REQUEST:
      console.log(FETCH_PICKUPS_REQUEST);
      return state;
    case FETCH_PICKUPS_SUCCESS:
      console.log(FETCH_PICKUPS_SUCCESS);
      return {
        pickups: [...state.pickups, ...action.payload],
      };
    case FETCH_PICKUPS_FAILURE:
      console.log(FETCH_PICKUPS_FAILURE);
      return state;
    case CLAIM_PICKUPS_REQUEST:
      console.log(CLAIM_PICKUPS_REQUEST);
      return state;
    case CLAIM_PICKUPS_SUCCESS:
      console.log(CLAIM_PICKUPS_SUCCESS);
      return {
        pickups: [...pickups, action.payload],
      };
    case CLAIM_PICKUPS_FAILURE:
      console.log(CLAIM_PICKUPS_FAILURE);
      return state;
    case UPDATE_PICKUPS:
      console.log(UPDATE_PICKUPS);
      return {
        pickups: [...action.payload],
      };
    default:
      return state;
  }
}
