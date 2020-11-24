import * as type from './types';

export function postVisit(visit){
   
  return{
    type: type.NEW_VISIT_REQUESTED,
    visit: visit
  }
}