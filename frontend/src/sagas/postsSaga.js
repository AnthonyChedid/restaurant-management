import {call,put,takeEvery} from 'redux-saga/effects';
import {getApi,getNameApi,getTypeApi,getNameTypeApi} from './apiCalls';

function* fetchPosts(action){
    
    try{
        let posts;
        if(action.payload.searchText==="" && action.payload.type===""){
            posts=yield call(getApi);
        }
        else if(action.payload.searchText!="" && action.payload.type===""){
            posts =yield call(getNameApi,action.payload.searchText);
        }
        else if(action.payload.searchText==="" && action.payload.type!=""){
            posts =yield call(getTypeApi,action.payload.type);
        }
        else if(action.payload.searchText!="" && action.payload.type!=""){
            posts =yield call(getNameTypeApi,action.payload.searchText,action.payload.type);
        }
        
        yield put({type: 'FETCH_POSTS_SUCCESS',posts:posts});

    }catch(e){
        yield put({type: 'FETCH_POSTS_FAILED',message:e.message });
    }
}

function* postsSaga(){
    yield takeEvery('FETCH_POSTS_REQUESTED', fetchPosts );
}

export default postsSaga;