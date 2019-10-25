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
    case FETCH_PICKUPS_SUCCESS:
      console.log(FETCH_PICKUPS_SUCCESS);
      console.log(action.payload);
      return {
        pickups: [...state.pickups, ...action.payload],
      };
    default:
      return state;
  }
}
