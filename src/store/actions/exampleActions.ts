import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FetchDataRequestAction,
  FetchDataSuccessAction,
  FetchDataFailureAction,
} from '../types/actionTypes';

export const fetchDataRequest = (): FetchDataRequestAction => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data: string): FetchDataSuccessAction => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error: string): FetchDataFailureAction => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});
