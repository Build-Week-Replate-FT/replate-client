import { userActions } from '../actions';
import { getUser } from '../api';
const {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} = userActions;

let user = {};
const initialState = {
  isPending: false,
  isSettled: false,
  error: null,
  user,
};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      console.log(LOGIN_REQUEST);
      return {
        ...state,
        isPending: true,
      };
    case LOGIN_SUCCESS:
      console.log(LOGIN_SUCCESS);
      return {
        ...state,
        isSettled: true,
        isPending: false,
        error: null,
        user: action.payload,
      };
    case LOGIN_FAILURE:
      console.log(LOGIN_FAILURE);
      return {
        ...state,
        isPending: false,
        isSettled: true,
        error: action.payload,
      };
    case REGISTER_REQUEST:
      console.log(REGISTER_REQUEST);
      return {
        ...state,
        isPending: true,
      };
    case REGISTER_SUCCESS:
      console.log(REGISTER_SUCCESS);
      return {
        ...state,
        isSettled: true,
        isPending: false,
        error: null,
      };
    case REGISTER_FAILURE:
      console.log(REGISTER_FAILURE);
      return {
        ...state,
        isPending: false,
        isSettled: true,
        error: action.payload,
      };
    default:
      return state;
  }
}
