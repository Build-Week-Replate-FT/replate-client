import { pickupsActionTypes } from '../actions';

const {
  UPDATE_PICKUPS,
  FETCH_PICKUPS_REQUEST,
  FETCH_PICKUPS_SUCCESS,
  FETCH_PICKUPS_FAILURE,
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
    case UPDATE_PICKUPS:
      console.log(UPDATE_PICKUPS);
      return {
        pickups: [...action.payload],
      };
    case FETCH_PICKUPS_FAILURE:
      console.log(FETCH_PICKUPS_FAILURE);
      return state;
    default:
      return state;
  }
}
