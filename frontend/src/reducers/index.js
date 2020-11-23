import { combineReducers } from 'redux';
import posts from './postReducer';
import visit from './visitReducer';

const rootReducer =combineReducers({
  posts,
  visit,
});

export default rootReducer;