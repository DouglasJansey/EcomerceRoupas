import * as types from '../types';

export function loginRequest(payload) {
  return {
    type: types.LOGIN_REQUEST,
    payload,
  };
}

export function userLogout(payload) {
  return {
    type: types.USER_LOGOUT,
    payload,
  };
}

export function loginFailure() {
  return {
    type: types.LOGIN_FAILURE,
  };
}
export function loginSuccess(payload) {
  return {
    type: types.LOGIN_SUCCESS,
    payload,
  };
}
export function loginAdmin(payload) {
  return {
    type: types.LOGIN_ADMIN,
    payload,
  };
}
