import {call,put, takeLatest} from 'redux-saga/effects';
import axios from 'axios'


function* urlVisit(visit) {
    try {
        return axios.post("http://localhost:8085/api/v1/visit",visit);
    }
    catch(e) {
        console.log('error');
      console.log(e);
    }
  }

  function* addVisit(action) {
    try {
    
      const result = yield call(urlVisit,action.visit);
      
      
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