import {
  call, put, all, takeLatest,
} from 'redux-saga/effects';
import * as action from './actions';
import * as types from '../types';

function* LoginRequest() {
  try {
    yield call();
    yield put(action.LoginRequest);
  } catch (e) {
    yield put(action.LoginRequest);
  }
}
export default all([takeLatest(types.LOGIN_REQUEST, LoginRequest())]);
