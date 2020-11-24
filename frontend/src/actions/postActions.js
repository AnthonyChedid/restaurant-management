import * as type from './Types';

export function getPosts(posts){
  return{
    type: type.FETCH_POSTS_REQUESTED,
    payload: posts,
  }
}


