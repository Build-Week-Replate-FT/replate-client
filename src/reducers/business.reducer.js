import { getUser } from '../api';
import { businessActionTypes } from '../actions';

const { CREATE_PICKUP_REQUEST, CREATE_PICKUP_SUCCESS, CREATE_PICKUP_FAILURE } = businessActionTypes;

const user = getUser() || {};
const pickupsList = user.business ? user.business.businesspickups : [];

const initialState = {
  pickups: {
    isPending: false,
    isSettled: false,
    error: null,
    pickupsList: pickupsList,
  },
  createPickup: {
    isPending: false,
    isSettled: false,
    error: null,
  },
};

export function business(state = initialState, action) {
  switch (action.type) {
    case CREATE_PICKUP_REQUEST:
      console.log(CREATE_PICKUP_REQUEST);
      return {
        ...state,
        pickups: {
          ...state.pickups,
          isPending: true,
        },
      };
    case CREATE_PICKUP_SUCCESS:
      console.log(CREATE_PICKUP_SUCCESS);
      const user = getUser();
      user.business.businesspickups = action.payload;
      localStorage.setItem('user', JSON.stringify(user));
      return {
        ...state,
        pickups: {
          ...state.pickups,
          isPending: false,
          isSettled: true,
          pickupsList: action.payload,
        },
      };
    case CREATE_PICKUP_FAILURE:
      console.log(CREATE_PICKUP_FAILURE);
      return {
        ...state,
        pickups: {
          ...state.pickups,
          isSettled: true,
          isPending: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
}
