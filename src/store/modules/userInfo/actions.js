import * as types from '../types';

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
export function userUpdatePhoto(payload) {
  return {
    type: types.USER_UPDATE_PHOTO,
    payload,
  };
}
export function userUpdateProfile(payload) {
  return {
    type: types.USER_UPDATE_PROFILE,
    payload,
  };
}
export function userUpdateAddress(payload) {
  return {
    type: types.USER_UPDATE_ADDRESS,
    payload,
  };
}
export function userUpdatePhones(payload) {
  return {
    type: types.USER_UPDATE_PHONES,
    payload,
  };
}
