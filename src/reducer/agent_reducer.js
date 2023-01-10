import {
 GET_AGENT_BEGIN,
 GET_AGENT_SUCCESS
} from '../action'




const agent_reducer = (state,action) => {
 if(action.type === GET_AGENT_BEGIN){
  return {...state, agent_loading:true}
 }
 if(action.type === GET_AGENT_SUCCESS){
  return {...state, 
   agent_loading:false,
   agents: action.payload,
  }
 }

}

export default agent_reducer