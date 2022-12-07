import * as types from '../types';

export function showProducts(payload) {
  return {
    type: types.SHOW_PRODUCTS,
    payload,
  };
}
export function showOrderPriceUp() {
  return {
    type: types.PRICE_UP,
  };
}
export function showOrderPriceDown() {
  return {
    type: types.PRICE_DOWN,
  };
}
export function removeProduct(payload) {
  return {
    type: types.REMOVE_PRODUCT,
    payload,
  };
}
