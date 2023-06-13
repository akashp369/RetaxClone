import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function PrivateRoute({children}) {
    const [auth, setAuth]= useEffect(false)
    // const navigate=useNavigate()
    console.log(auth)
    useEffect(()=>{
        setAuth(JSON.parse(localStorage.getItem('auth')))
    },[auth])

    if(auth==false){
        return <Navigate to='/' />
    }
  return children
}
