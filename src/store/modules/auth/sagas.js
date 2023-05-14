import {
  call, put, all, takeLatest,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import * as types from '../types';
import * as action from './actions';
import * as actionUser from '../userInfo/actions';
import axios from '../../../services/axios';

function* loginRequest({ payload }) {
  try {
    const res = yield call(axios.post, '/tokens', payload);
    const { email } = res.data.user;
    // Atualiza os dados do usuário para edição
    if (email === process.env.REACT_APP_ADMIN) {
      yield put(action.loginAdmin({ ...res.data }));
    } else {
      yield put(action.loginSuccess({ ...res.data }));
    }
    toast.success('Login feito com sucesso!');
    axios.defaults.headers.Authorization = `Bearer ${res.data.token}`;

    const resp = yield call(axios.get, '/users');

    yield put(actionUser.userUpdate({ ...resp.data }));
  } catch (e) {
    toast.error('Usuário ou senha inválidos');
    yield put(action.loginFailure());
  }
}
function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token');
  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}
export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
]);
