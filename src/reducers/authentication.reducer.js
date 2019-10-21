import { userConstants } from '../constants';
const { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } = userConstants;

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
    default:
      return state;
  }
}
