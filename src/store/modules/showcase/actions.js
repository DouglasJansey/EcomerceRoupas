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
export function filterType(payload) {
  return {
    type: types.FILTER_TYPE,
    payload,
  };
}
export function showOrderTeam(payload) {
  return {
    type: types.ORDER_TEAM,
    payload,
  };
}
export function removeShowCase(payload) {
  return {
    type: types.REMOVE_SHOWCASE,
    payload,
  };
}
