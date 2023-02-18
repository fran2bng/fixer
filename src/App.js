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
import { Route, Navigate, Routes, } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute/ProtectedRoute";
import PublicRoute from "./routes/ProtectedRoute/Routes";
import { Store } from "@reduxjs/toolkit";
import Page from "./routes/Home";

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

   
  <div className="public">   {!user ? (<Login/> ) : (  <div className="no-public">  <Page/>  </div>    )}
    </div>

  )
  }


  /*   <div className="public">   {!user ? ( <Navigate to= {<Login/>}/> ) : (  <div className="no-public">  <Navigate to = {<Home/>} />  </div>    )}
    </div>


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