import {call,put, takeLatest} from 'redux-saga/effects';
import axios from 'axios'


function* urlVisit(visit) {
    console.log('visit url');
    try {
        return axios.post("http://localhost:8085/api/v1/visit",visit);
    }
    catch(e) {
        console.log('error');
      console.log(e);
    }
  }

  function* addVisit(action) {
    console.log('Adding a visittttttttttt');
    try {
    
      const result = yield call(urlVisit,action.visit);
      
      
      console.log(action.visit);
      yield put({ type: 'NEW_VISIT_SUCCESS'});

      console.log('Added a user successfully');
    } 
    catch(e) {
        yield put({ type: 'NEW_VISIT_FAILED'});
      console.log(e);
    }
  }


  function* visitSaga(){
    console.log("saga working");
    yield takeLatest('NEW_VISIT_REQUESTED', addVisit );
}

export default visitSaga;