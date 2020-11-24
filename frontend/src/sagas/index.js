import {all} from 'redux-saga/effects';
import postsSaga from './postsSaga';
import visitSaga from './visitSaga';
import visitedSaga from './visitedSaga';


export default function* rootSaga(){
    yield all([
        postsSaga(),
        visitSaga(),
        visitedSaga(),
     
    ])
}