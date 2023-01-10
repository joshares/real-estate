import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducer/agent_reducer'
import { 
 GET_AGENT_BEGIN,
 GET_AGENT_SUCCESS
 } from '../action'


const initialState = {
  agent_loading: false,
  agent_error: false,
  agents: [],
}

const AgentContext = React.createContext()

const url = 'https://realty-in-us.p.rapidapi.com/agents/list?postal_code=11234&offset=0&limit=20&sort=recent_activity_high&types=agent'

export const AgentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
// first api
//   const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '56b9e20cb6msh7017f6f2e9db3cdp18320djsnbab82513f0e4',
// 		'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
// 	}
// };
// second api 
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'd0f14556c4msh4c435fd90956c18p1bf1f9jsnecf79b5b7447',
// 		'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
// 	}
// };
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '91a6be971cmshd6a0db1c4d45817p14360ajsn90c9fe8cbf39',
		'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
	}
};

// fetch('https://realty-in-us.p.rapidapi.com/agents/list?postal_code=11234&offset=0&limit=20&sort=recent_activity_high&types=agent', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

const fetchAgents = async(url) => {
   dispatch({type:GET_AGENT_BEGIN})
  try{
    const response = await fetch(url, options)
    const data = await response.json()
    const products = data.agents.filter((t)=> t.specializations !== undefined)
    const product = products.slice(1,-1)
    dispatch({type: GET_AGENT_SUCCESS, payload:product})
  }catch(err){
    console.log(err)
  }
}

useEffect(()=> {
 fetchAgents(url)
  // eslint-disable-next-line
},[])



  return (
    <AgentContext.Provider value={{
     ...state,
    }}
    >
      {children}
    </AgentContext.Provider>
  )
}
export const useAgentContext = () => {
  return useContext(AgentContext)
}
