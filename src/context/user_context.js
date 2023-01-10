import React, { useContext, useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const UserContext = React.createContext()
export const UserProvider = ({ children }) => {
  const { loginWithRedirect,logout,user} = useAuth0()

  const [myUser, setMyUser] = useState({ 
    given_name: null ,family_name:null})

  useEffect(()=> {
    if(user){
      setMyUser(user)
    }
     // eslint-disable-next-lin
  },[user])
  

  return (
    <UserContext.Provider value={{
      loginWithRedirect,
      logout,
      myUser,
    }}>{children}</UserContext.Provider>
  )
}
// make sure use
export const useUserContext = () => {
  return useContext(UserContext)
}
