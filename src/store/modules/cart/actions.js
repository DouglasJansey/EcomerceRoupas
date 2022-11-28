import * as types from '../types';

export function addCart(payload) {
  return {
    type: types.ADD_CART,
    payload,
  };
}

export function removeCart(payload) {
  return {
    type: types.REMOVE_CART,
    payload,
  };
}
export function addQuantity(payload) {
  return {
    type: types.ADD_QUANTITY,
    payload,
  };
}
export function removeQuantity(payload) {
  return {
    type: types.REMOVE_QUANTITY,
    payload,
  };
}
export function addSizeProduct(payload) {
  return {
    type: types.ADD_SIZE_PRODUCT,
    payload,
  };
}
