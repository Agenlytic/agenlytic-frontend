import { all, fork } from 'redux-saga/effects';
import { watchExample } from './sagas/exampleSaga';

export default function* rootSaga() {
  yield all([fork(watchExample)]);
}
