// Action Types
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST' as const;
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS' as const;
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE' as const;

// Action Interfaces
export interface FetchDataRequestAction {
  type: typeof FETCH_DATA_REQUEST;
}

export interface FetchDataSuccessAction {
  type: typeof FETCH_DATA_SUCCESS;
  payload: string;
}

export interface FetchDataFailureAction {
  type: typeof FETCH_DATA_FAILURE;
  payload: string;
}

export type ExampleActionTypes =
  | FetchDataRequestAction
  | FetchDataSuccessAction
  | FetchDataFailureAction;

// State Interface
export interface ExampleState {
  data: string | null;
  loading: boolean;
  error: string | null;
}
