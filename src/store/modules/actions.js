import * as types from './types';

export function addProducts(produtos) {
  return {
    type: types.ADD_PRODUCTS,
    produtos,
  };
}
export function addCart(payload) {
  return {
    type: types.ADD_CART,
    payload,
  };
}
