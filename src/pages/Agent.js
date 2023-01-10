import React from 'react'
import { useAgentContext } from '../context/agent_context'
import Loading from '../component/Loading'
import Agents from '../component/Agents'

const Agent = () => {
 const {
  agents,
  agent_loading:loading,
 } = useAgentContext()
 
 if(loading){
  return <Loading/>
 }

 // const {full_name,slogan,web_url,phones,office,specializations} = agents
 return (
  <main className='agentz'>
   <div><h1>Available Agents</h1></div>
   {agents.map((agent)=>{
    return(
        <Agents {...agent}/>
    )
   })}
  </main>
 )
}

export default Agent