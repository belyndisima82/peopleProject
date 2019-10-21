import { fork, all } from 'redux-saga/effects';
import people from './people';

function * startAppSagas() {
  yield all([
    ...people,
  ]);
}

export default function * () {
  yield fork(startAppSagas);
}