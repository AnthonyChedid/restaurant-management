import * as type from './types';

export function postVisit(visit){
    console.log("visit action")
  return{
    type: type.NEW_VISIT_REQUESTED,
    visit: visit
  }
}