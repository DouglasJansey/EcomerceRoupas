/* eslint-disable require-yield */
import {
  call, put, all, takeLatest,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import * as types from '../types';
import * as action from './actions';
import axios from '../../../services/axios';

function* updateUser(payload) {
  try {
    if (payload.data && payload.method) {
      if (payload.method === 'put') {
        const photo = yield call(axios.put, '/fotos/', {
          originalname: payload.data.id,
          filename: payload.data.image.filename,
          display_url: payload.data.display_url,
        });
        yield put(action.userUpdatePhoto(photo.data));
      }
      if (payload.method === 'post') {
        const photo = yield call(axios.post, '/fotos/', {
          originalname: payload.data.id,
          filename: payload.data.image.filename,
          display_url: payload.data.display_url,
          user_id: payload.id,
        });
        yield put(action.userUpdatePhoto(photo.data));
      }
    } if (payload.userProfile) {
      const user = yield call(axios.put, '/users/', payload.userProfile);
      yield put(action.userUpdateProfile(user.data));
    } else if (payload.userAddress) {
      const address = yield call(axios.put, '/endereco/', payload.userAddress);
      yield put(action.userUpdateAddress(address.data));
    } else if (payload.userPhone) {
      const phones = yield call(axios.put, '/telefones/', payload.userPhone);
      yield put(action.userUpdatePhones(phones.data));
    }
  } catch (err) {
    yield err;
  }
}

function* userRequest({ payload }) {
  yield updateUser(payload);
}
export default all([
  takeLatest(types.USER_REQUEST, userRequest),
]);
