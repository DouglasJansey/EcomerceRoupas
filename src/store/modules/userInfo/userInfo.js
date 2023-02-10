/* eslint-disable func-names */
/* eslint-disable max-len */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable default-param-last */
/* eslint-disable no-case-declarations */
import localStorage from 'redux-persist/es/storage';
import * as types from '../types';

const INITIAL_STATE = {
  user: {},
};
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.USER_UPDATE: {
      const newState = { ...state };
      newState.user = action.payload;
      return newState;
    }
    case types.USER_UPDATE_PHOTO: {
      const newState = { ...state };
      newState.user.Photo = action.payload;
      return newState;
    }
    case types.USER_UPDATE_PROFILE: {
      const newState = { ...state };
      newState.user = action.payload;
      return newState;
    }
    case types.USER_UPDATE_ADDRESS: {
      const newState = { ...state };
      newState.user.Addresses[0] = action.payload;
      return newState;
    }
    case types.USER_UPDATE_PHONES: {
      const newState = { ...state };
      newState.user.Phones[0] = action.payload;
      return newState;
    }
    case types.USER_LOGOUT: {
      const newState = { ...INITIAL_STATE };
      return newState;
    }
    default:
      return state;
  }
}
