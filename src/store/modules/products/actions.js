import * as types from '../types';

export function addProducts(payload) {
  return {
    type: types.ADD_PRODUCTS,
    payload,
  };
}
export function orderPriceUp() {
  return {
    type: types.ORDER_PRICE_UP,
  };
}
export function orderPriceDown() {
  return {
    type: types.ORDER_PRICE_DOWN,
  };
}
export function removeProduct(payload) {
  return {
    type: types.REMOVE_PRODUCT,
    payload,
  };
}
