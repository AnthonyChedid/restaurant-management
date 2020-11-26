import axios from 'axios';

export function getApi(){
    return fetch('http://localhost:8085/api/v1/restaurants',{
        method: 'GET',
        headers:{
            'Content-Type':'application/json',
         }

    }).then(response => response.json())
    .catch((error)=> {throw error})

}


export function getNameApi(name){
    return fetch("http://localhost:8085/api/v1/restaurants-by-name?name="+name,{
        method: 'GET',
        headers:{
            'Content-Type':'application/json',
         }

    }).then(response => response.json())
    .catch((error)=> {throw error})

}

export function getTypeApi(type){
    return fetch("http://localhost:8085/api/v1/restaurants-by-type?type="+type,{
        method: 'GET',
        headers:{
            'Content-Type':'application/json',
         }

    }).then(response => response.json())
    .catch((error)=> {throw error})

}

export function getNameTypeApi(name,type){
    return fetch("http://localhost:8085/api/v1/restaurants-by-type_name?name="+name+"&type="+type,{
        method: 'GET',
        headers:{
            'Content-Type':'application/json',
         }

    }).then(response => response.json())
    .catch((error)=> {throw error})

}

export function getVisitedApi(){
    return fetch('http://localhost:8085/api/v1/visited',{
        method: 'GET',
        headers:{
            'Content-Type':'application/json',
         }

    }).then(response => response.json())
    .catch((error)=> {throw error})

}


export function postVisit(visit) {
    try {
        return axios.post("http://localhost:8085/api/v1/visit",visit);
    }
    catch(e) {
        console.log('error');
      console.log(e);
    }
  }

