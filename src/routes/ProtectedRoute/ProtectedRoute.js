import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, redirect } from 'react-router-dom'
import App from '../../App'
import { selectUser } from '../../redux/slices/userSlice'
import Home from '../Home'
import { Login } from '../Login'



function ProtectedRoute({children }) {

const user = useSelector(selectUser)

  if (!user) {
  return <Navigate to="/"/>
   } else {
    <Navigate to="/"></Navigate>
   }
   return children
}
export default ProtectedRoute