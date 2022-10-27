/* eslint-disable func-names */
/* eslint-disable max-len */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable default-param-last */
/* eslint-disable no-case-declarations */
import localStorage from 'redux-persist/es/storage';
import * as types from '../types';

const INITIAL_STATE = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
  admin: false,
};
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;
      return newState;
    }
    case types.USER_UPDATE: {
      const newState = { ...state };
      newState.user = action.payload;
      return newState;
    }
    case types.LOGIN_ADMIN: {
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;
      newState.admin = true;
      return newState;
    }

    case types.LOGIN_FAILURE: {
      const newState = { ...INITIAL_STATE };
      return newState;
    }

    default:
      return state;
  }
}
