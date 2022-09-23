import * as types from '../types';

export function LoginRequest() {
  return {
    type: types.LOGIN_REQUEST,
  };
}
export function LoginFailure() {
  return {
    type: types.LOGIN_FAILURE,
  };
}
export function LoginSuccess() {
  return {
    type: types.LOGIN_SUCCESS,
  };
}
