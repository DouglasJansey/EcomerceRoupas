/* eslint-disable default-param-last */
import * as types from '../types';

const INITIAL_STATE = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
};
export default function Auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      return state;
    }

    case types.LOGIN_SUCCESS: {
      return state;
    }
    case types.LOGIN_FAILURE: {
      return state;
    }

    default:
      return state;
  }
}
