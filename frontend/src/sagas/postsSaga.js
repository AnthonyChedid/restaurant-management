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


function getNameApi(name){
    console.log("fetching url")
    return fetch("http://localhost:8085/api/v1/restaurants-by-name?name="+name,{
        method: 'GET',
        headers:{
            'Content-Type':'application/json',
         }

    }).then(response => response.json())
    .catch((error)=> {throw error})

}

function getTypeApi(type){
    console.log("fetching url")
    return fetch("http://localhost:8085/api/v1/restaurants-by-type?type="+type,{
        method: 'GET',
        headers:{
            'Content-Type':'application/json',
         }

    }).then(response => response.json())
    .catch((error)=> {throw error})

}

function getNameTypeApi(name,type){
    console.log(name+type)
    return fetch("http://localhost:8085/api/v1/restaurants-by-type_name?name="+name+"&type="+type,{
        method: 'GET',
        headers:{
            'Content-Type':'application/json',
         }

    }).then(response => response.json())
    .catch((error)=> {throw error})

}

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