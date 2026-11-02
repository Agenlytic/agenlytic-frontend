import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  ExampleState,
  ExampleActionTypes,
} from '../types/actionTypes';

const initialState: ExampleState = {
  data: null,
  loading: false,
  error: null,
};

export const exampleReducer = (
  state: ExampleState = initialState,
  action: ExampleActionTypes
): ExampleState => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default exampleReducer;
