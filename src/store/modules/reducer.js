/* eslint-disable default-param-last */
/* eslint-disable no-case-declarations */
import * as types from './types';

const initialState = {
  produtos: [],
  favoritos: false,
};
// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case types.ADD_PRODUCTS: {
      const newProducts = { ...state };
      newProducts.produtos = action.produtos;
      return newProducts;
    }
    case types.ADD_CART: {
      const newState = { ...state };
      newState.produtos.push(action.payload);
      console.log(newState);
      return newState;
    }

    default:
      return state;
  }
}
