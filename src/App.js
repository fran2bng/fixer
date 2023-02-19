import "./App.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./redux/slices/userSlice.js";
import { auth } from "./firebase.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import Provider from "react-redux";
import { Login } from "./routes/Login";
import { BrowserRouter, redirect, useNavigate } from "react-router-dom";
import SignWithGoogle from "./components/SignWithGoogle";
import { Route, Navigate, Routes, } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute/ProtectedRoute";
import PublicRoute from "./routes/ProtectedRoute/Routes";
import { Store } from "@reduxjs/toolkit";
import Page from "./routes/Home";


export default function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [checking, setCheking] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          }) 
          
        ); 
      }  else {
        dispatch(logout());
      }
    });
  }, []);

  return ( <div>
    <div className="public">   {!user ? ( <Login/>) 


    :


    (   
      <div className="no-public">  
      <BrowserRouter>
      <Routes>     
        
        <Route path="/page" element= {<Navigate to="/page"/>} />
        <Route path="/page" element= {<Page/>} />

      </Routes>
    </BrowserRouter>   
    </div>    
    )}
    </div>
     </div>
  )
  }


  /*   <div className="public">   {!user ? ( <Navigate to= {<Login/>}/> ) : (  <div className="no-public">  <Navigate to = {<Home/>} />  </div>    )}
    </div>

<Route path="/auth" element={this.state.token ? <Navigate to="/competition" /> : AuthPage}


 <ProtectedRoute>
   
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Login/> }/>
      <Route path="/home/*" element= {<Page/>} />
    </Routes>
  </BrowserRouter>
</ProtectedRoute>

  export default function Admin(props) {
  return props.isLoggedIn ? (
    <div>
      <Row className={stylesadmin.root}> 
        <Uploader/>
       <ToastContainer/>  
      </Row>
    </div>
  ) : (
    <Navigate to="/Auth" replace />
  );
}






            <Route path='/createprofile' element={<PrivateRoute component={CreateProfileView} />} />


    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Login/> }/>
      <Navigate to = "/" />
      <Route path="home" element={<PrivateRoute>
      <Home/>
      </PrivateRoute>  }/>
    </Routes>
  </BrowserRouter>
    */;