import { all, fork } from 'redux-saga/effects';

import { watchAuthRequests } from '../../modules/auth/redux/sagas';

export default function*() {
  yield all([
    fork(watchAuthRequests),
  ]);
}
