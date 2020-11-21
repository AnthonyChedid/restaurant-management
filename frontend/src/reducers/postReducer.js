import * as type from '../actions/types';

const initiateState={
  posts:[],
  loading:false,
  error:null,
}

export default function posts(state = initiateState,action){
  switch(action.type){
    case type.FETCH_POSTS_REQUESTED:
      return {
        ...state,
        loading:true,
      }
      case type.FETCH_POSTS_SUCCESS:
        return{
          ...state,
          loading:false,
          posts:action.posts,
        }
      case type.FETCH_POSTS_FAILED:
        return{
          ...state,
          loading:false,
          error:action.message,
        }
      default:
        return state;
  }
}