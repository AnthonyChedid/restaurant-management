import {call,put, takeLatest} from 'redux-saga/effects';
import {postVisit} from './apiCalls';

  function* addVisit(action) {
    try {
    
      const result = yield call(postVisit,action.visit);
      
      
      console.log(action.visit);
      yield put({ type: 'NEW_VISIT_SUCCESS'});

    } 
    catch(e) {
        yield put({ type: 'NEW_VISIT_FAILED'});
      console.log(e);
    }
  }


  function* visitSaga(){
  
    yield takeLatest('NEW_VISIT_REQUESTED', addVisit );
}

export default visitSaga;