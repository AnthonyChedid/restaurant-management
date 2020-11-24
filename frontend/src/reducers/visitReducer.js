import * as type from '../actions/Types';


export default function visit(state =[],action){
  switch(action.type){
    case type.NEW_VISIT_REQUESTED:
        return [!state];
    
    default:
        return state;
  }
}