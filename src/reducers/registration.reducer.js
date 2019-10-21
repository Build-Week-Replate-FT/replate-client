import { userConstants } from '../actions';
const { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } = userConstants;

const initialState = {
  isPending: false,
  isSettled: false,
  error: null,
};

export function registration(state = initialState, action) {
  switch (action.type) {
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
