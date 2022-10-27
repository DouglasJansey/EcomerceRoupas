import {
  call, put, all, takeLatest,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import * as types from '../types';
import * as action from './actions';
import axios from '../../../services/axios';

function* loginRequest({ payload }) {
  try {
    const res = yield call(axios.post, '/tokens', payload);
    const { email, id } = res.data.user;
    const user = yield call(axios.get, `/users/${id}`);
    if (email === process.env.REACT_APP_BASE_ADM) yield put(action.loginAdmin({ ...res.data }));
    yield put(action.loginSuccess({ ...res.data }));
    yield put(action.userUpdate({ ...user.data }));
    axios.defaults.headers.Authorization = `Bearer ${res.data.token}`;
  } catch (e) {
    toast.error('Usuário ou senha inválidos');
    yield put(action.loginFailure());
  }
}
function* userRequest({ payload }) {
  yield put(action.userUpdate(payload));
}
function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token');
  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}
export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.USER_REQUEST, userRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
]);
