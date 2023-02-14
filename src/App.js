import "./App.css";
import React, { useEffect } from "react";
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
import { BrowserRouter, redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SignWithGoogle from "./components/SignWithGoogle";
import { Route, Navigate, Routes } from "react-router-dom";
import Home from "./routes/Home";
import ProtectedRoute from "./routes/ProtectedRoute/ProtectedRoute";
import Turns from "./routes/turns";

<BrowserRouter>
    <Routes>

      
      <Route path="/" element= { <Login/>  } />
      
      <Route path="/home" element= {<ProtectedRoute> <Home/> </ProtectedRoute>} />
      
      <Route path="/turns" element= { <Turns/> } />


    </Routes> 
  </BrowserRouter>
export default function App() {







  const user = useSelector(selectUser);
  const dispatch = useDispatch();

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
      } else {
        dispatch(logout());
      }
    });
  }, []);
 
  return ( 
    <ProtectedRoute></ProtectedRoute>
  );
}



  /*  <div className="public">   {!user ? (  ) : (  <div className="no-public">   <Home />  </div>    )}
    </div>
    
    
    
   
    
    
    
    */