import * as type from '../actions/Types';

const initiateState={
  visited:[],
  loading:false,
  error:null,
}

export default function visited(state = initiateState,action){
  
  switch(action.type){
    case type.FETCH_VISITED_REQUESTED:
      return {
        ...state,
        loading:true,
      }
      case type.FETCH_VISITED_SUCCESS:
        return{
          ...state,
          loading:false,
          visited:action.visited,
        }
      case type.FETCH_VISITED_FAILED:
        return{
          ...state,
          loading:false,
          error:action.message,
        }
      default:
        return state;
  }
}