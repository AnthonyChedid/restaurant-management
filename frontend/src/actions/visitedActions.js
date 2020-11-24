import * as type from './Types';

export function getVisited(visited){
  return{
    type: type.FETCH_VISITED_REQUESTED,
    payload: visited,
  }
}