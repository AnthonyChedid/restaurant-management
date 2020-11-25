import {call,put,takeEvery} from 'redux-saga/effects';

function getVisitedApi(){
    return fetch('http://localhost:8085/api/v1/visited',{
        method: 'GET',
        headers:{
            'Content-Type':'application/json',
         }

    }).then(response => response.json())
    .catch((error)=> {throw error})

}



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