import { combineReducers } from 'redux';
import cart from './cart/cart';
import auth from './auth/auth';
import products from './products/products';

export default combineReducers({
  cart,
  auth,
  products,
});
