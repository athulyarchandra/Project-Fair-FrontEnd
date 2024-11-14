import React, { createContext, useEffect, useState } from 'react'
export const tokenAuthContext = createContext()

const AuthContextAPI = ({children}) => {
    const [isAuthrorised,setIsAuthrorised] = useState(false)
    useEffect(()=>{
        if(sessionStorage.getItem("token")){
            setIsAuthrorised(true)
        }else{
            setIsAuthrorised(false)
        }
    },[isAuthrorised])
  return (
    <tokenAuthContext.Provider value={{isAuthrorised,setIsAuthrorised}}>
    {children}
    </tokenAuthContext.Provider>
  )
}

export default AuthContextAPI