import { combineReducers } from 'redux';
import posts from './postReducer';
import visit from './visitReducer';
import visited from './visitedreducer'

const rootReducer =combineReducers({
  posts,
  visit,
  visited,
});

export default rootReducer;