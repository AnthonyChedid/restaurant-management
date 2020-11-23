import * as type from './types';

export function getPosts(posts){
  return{
    type: type.FETCH_POSTS_REQUESTED,
    payload: posts,
  }
}

export const filterPosts=(posts,t)=>(dispatch)=>{
  return dispatch[{
    type: type.FILTER_POSTS,
    payload:{
      type:t,
      posts: posts.filter(a=> a.type>0)
    }
  }]
}

