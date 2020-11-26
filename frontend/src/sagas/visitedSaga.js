import {call,put,takeEvery} from 'redux-saga/effects';
import {getVisitedApi} from './apiCalls';

function* fetchVisited(action){
    
    try{
        const visited=yield call(getVisitedApi);
        yield put({type: 'FETCH_VISITED_SUCCESS',visited:visited});

    }catch(e){
        yield put({type: 'FETCH_VISITED_FAILED',message:e.message });
    }
}

function* visitedSaga(){
    yield takeEvery('FETCH_VISITED_REQUESTED', fetchVisited);
}

export default visitedSaga;