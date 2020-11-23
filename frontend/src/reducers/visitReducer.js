import * as type from '../actions/types';


export default function visit(state =[],action){
    console.log("visit reducer");
  switch(action.type){
    case type.NEW_VISIT_REQUESTED:
        return [!state];
    
    default:
        return state;
  }
}