/* eslint-disable max-len */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable default-param-last */
/* eslint-disable no-case-declarations */
import * as types from '../types';

const initialState = {
  produtos: [],
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case types.SHOW_PRODUCTS: {
      const newState = { ...state };
      newState.produtos = action.payload;
      return newState;
    }
    case types.PRICE_DOWN: {
      const newState = { ...state };
      newState.produtos.rows = state.produtos.rows.sort((a, b) => a.price - b.price);
      return newState;
    }
    case types.PRICE_UP: {
      const newState = { ...state };
      newState.produtos.rows = state.produtos.rows.sort((a, b) => b.price - a.price);
      return newState;
    }
    case types.REMOVE_PRODUCT: {
      const newState = { ...state };
      newState.produtos.rows = state.produtos.rows.filter((item) => item.id !== action.payload);
      return newState;
    }
    default:
      return state;
  }
}
