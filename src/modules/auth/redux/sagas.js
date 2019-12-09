import { all } from 'redux-saga/effects';
import { SIGN_UP } from './actions';

export function* watchAuthRequests() {
    yield all([apiSaga(SIGN_UP)()]);
  }