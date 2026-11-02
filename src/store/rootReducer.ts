import { combineReducers } from 'redux';
import { exampleReducer } from './reducers/exampleReducer';

export const rootReducer = combineReducers({
  example: exampleReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
