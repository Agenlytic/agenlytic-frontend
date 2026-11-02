import { put, takeLatest, delay, all } from 'redux-saga/effects';
import { FETCH_DATA_REQUEST } from '../types/actionTypes';
import { fetchDataSuccess, fetchDataFailure } from '../actions/exampleActions';

function* fetchDataWorker() {
  try {
    yield delay(500);
    yield put(fetchDataSuccess('Data successfully fetched via Redux Saga'));
  } catch (error) {
    yield put(fetchDataFailure((error as Error).message || 'Failed to fetch data'));
  }
}

export function* watchExample() {
  yield all([takeLatest(FETCH_DATA_REQUEST, fetchDataWorker)]);
}
