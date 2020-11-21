import {call,put,takeEvery} from 'redux-saga/effects';

const apiUrl='http://localhost:8085/api/v1/restaurants';
function getApi(){
    console.log("fetching url")
    return fetch(apiUrl,{
        method: 'GET',
        headers:{
            'Content-Type':'application/json',
         }

    }).then(response => response.json())
    .catch((error)=> {throw error})

}

function* fetchPosts(action){
    
    try{
        console.log("entering fetch");
        const posts=yield call(getApi);
        yield put({type: 'FETCH_POSTS_SUCCESS',posts:posts});

    }catch(e){
        yield put({type: 'FETCH_POSTS_FAILED',message:e.message });
    }
}

function* postsSaga(){
    console.log("saga working");
    yield takeEvery('FETCH_POSTS_REQUESTED', fetchPosts );
}

export default postsSaga;