import {all} from 'redux-saga/effects';
import postsSaga from './postsSaga';
import visitSaga from './visitSaga';


export default function* rootSaga(){
    yield all([
        postsSaga(),
        visitSaga(),
    ])
}