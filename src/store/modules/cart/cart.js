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
    case types.ADD_CART: {
      const newState = { ...state };
      newState.produtos.push(action.payload);
      return newState;
    }
    case types.REMOVE_CART: {
      const newState = { ...state };
      newState.produtos = state.produtos.filter((item) => item.cartItem.id !== action.payload.id);
      return newState;
    }
    case types.ADD_QUANTITY: {
      const newState = { ...state };
      newState.produtos = state.produtos.map((item) => (item.cartItem.id === action.payload
        ? {
          ...item,
          subInfo: {
            quantity: item.subInfo.quantity += 1,
            subTotal: item.subInfo.quantity * item.cartItem.price,
            size: item.subInfo.size,
          },
        } : item));
      return newState;
    }
    case types.REMOVE_QUANTITY: {
      const newState = { ...state };
      newState.produtos = state.produtos.map((item) => (item.cartItem.id === action.payload && item.subInfo.quantity > 1
        ? {
          ...item,
          subInfo: {
            quantity: item.subInfo.quantity -= 1,
            subTotal: item.subInfo.quantity * item.cartItem.price,
            size: item.subInfo.size,
          },
        } : item));
      return newState;
    }
    case types.ADD_SIZE_PRODUCT: {
      const newState = { ...state };
      newState.produtos = state.produtos.map((item) => (item.cartItem.id === action.payload.id
        ? {
          ...item,
          subInfo: {
            size: action.payload.value,
            quantity: item.subInfo.quantity,
            subTotal: item.subInfo.subTotal,
          },
        } : item));
      console.log(newState);
      return newState;
    }
    default:
      return state;
  }
}
