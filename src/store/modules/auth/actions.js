import * as types from '../types';

export function loginRequest(payload) {
  return {
    type: types.LOGIN_REQUEST,
    payload,
  };
}
export function userRequest(payload) {
  return {
    type: types.USER_REQUEST,
    payload,
  };
}
export function userUpdate(payload) {
  return {
    type: types.USER_UPDATE,
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
