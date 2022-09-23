/* eslint-disable default-param-last */
/* eslint-disable no-case-declarations */
import * as types from '../types';

const initialState = {
  produtos: [],
  subTotal: { },
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case types.ADD_CART: {
      const newState = { ...state };
      newState.produtos = [...state.produtos, action.payload];
      newState.produtos = [...new Set(newState.produtos)];
      console.log(newState);

      return newState;
    }
    case types.REMOVE_CART: {
      const newState = { ...state.produtos };
      newState.produtos = state.produtos.filter((item) => item.id !== action.payload);

      return newState;
    }
    case types.ADD_TOTAL: {
      const newState = { ...state.subTotal };
      newState.subTotal = action.payload;
      return newState;
    }

    default:
      return state;
  }
}
