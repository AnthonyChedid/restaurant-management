import * as type from './Types';

export function postVisit(visit){
   
  return{
    type: type.NEW_VISIT_REQUESTED,
    visit: visit
  }
}