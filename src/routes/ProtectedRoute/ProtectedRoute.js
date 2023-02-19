import { Route, Navigate, Routes, useNavigate, Router, BrowserRouter } from "react-router-dom";
import {user} from "../../App";
import { useSelector } from "react-redux";
import React from 'react'
import Page from "../Home";
import { login, logout, selectUser } from "../../redux/slices/userSlice";
import { Login } from "../Login";

export default function ProtectedRoute() {

  const user = useSelector(selectUser);

  return (
   <div className="public">   {!user ? (

    <BrowserRouter>
    <Routes>
    
      <Route path="/" element={ <Login/> }/>
   
    </Routes>
    </BrowserRouter>
     
   



 ) 
:
 (  <div className="no-public">

   <BrowserRouter>
    <Routes>
    
      <Route path="/home" element= {<Page/>} />
  
    </Routes>  
   </BrowserRouter> 
  
   
   
    </div>    )}
    </div>

  )
}









/*export const PrivateRoute = ({isLoggedIn, Element, ...rest}) => {
  return (
    <Routes>
    <Route {...rest}
    element = {(props) =>
    isLoggedIn ? <Element {...props} /> : <Navigate to= "/" />
    }
    />
</Routes>
  );
} */
