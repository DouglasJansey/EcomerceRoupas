import { combineReducers } from 'redux';
import cart from './cart/cart';
import auth from './auth/auth';
import products from './products/products';
import userInfo from './userInfo/userInfo';
import showCase from './showcase/showcase';

export default combineReducers({
  cart,
  auth,
  products,
  userInfo,
  showCase,
});
