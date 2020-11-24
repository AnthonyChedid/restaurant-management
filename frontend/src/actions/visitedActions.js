import * as type from './types';

export function getVisited(visited){
  return{
    type: type.FETCH_VISITED_REQUESTED,
    payload: visited,
  }
}