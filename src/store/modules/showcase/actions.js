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
export function searchPrice(payload) {
  return {
    type: types.SEARCH_PRICE,
    payload,
  };
}
export function showOrderTeam(payload) {
  return {
    type: types.ORDER_TEAM,
    payload,
  };
}
