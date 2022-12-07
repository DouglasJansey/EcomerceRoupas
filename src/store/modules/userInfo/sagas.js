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
    if (payload.userPhoto) {
      const photo = yield call(axios.put, '/fotos/', payload.userPhoto, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      yield put(action.userUpdatePhoto(photo.data));
    } else if (payload.userProfile) {
      const user = yield call(axios.put, '/users/', payload.userProfile);
      yield put(action.userUpdateProfile(user.data));
    } else if (payload.userAddress) {
      const address = yield call(axios.put, '/endereco/', payload.userAddress);
      console.log(payload.userAddress, address);
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
//   try {
//     const photo = yield call(axios.put, '/fotos/', payload.userPhoto, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });
//     yield put(action.userUpdatePhoto(photo.data));
//   } catch (err) {
//     yield console.log(err);
//   }
}
export default all([
  takeLatest(types.USER_REQUEST, userRequest),
]);
