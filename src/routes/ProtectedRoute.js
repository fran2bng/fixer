
    /*import "../App.css";
    import React, { useEffect, useState } from "react";
    import { useDispatch, useSelector } from "react-redux";
    import { login, logout, selectUser } from "../redux/slices/userSlice.js";
    import { auth } from "../firebase.js";
    import {
      getAuth,
      createUserWithEmailAndPassword,
      updateProfile,
      onAuthStateChanged,
      signInWithEmailAndPassword,
      signOut,
    } from "firebase/auth";
    import Provider from "react-redux";
    import { BrowserRouter, redirect, useNavigate } from "react-router-dom";
    import SignWithGoogle from "../components/SignWithGoogle";
    import { Route, Navigate, Routes, } from "react-router-dom";
    import { Store } from "@reduxjs/toolkit";
    import Page from "../routes/Home";
    import { Login } from "../routes/Login";
    
    
    
    export default function ProtectedRoute({Element, ...rest}) {
    
      
      const user = useSelector(selectUser);
      const dispatch = useDispatch();
      const Navigate = useNavigate();
    
      useEffect(() => {
        onAuthStateChanged(auth, (userAuth) => {
          if (userAuth) { Navigate() 
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

    return (
        <Route
          {...rest}
          element={(...rest) =>
            user ? <Navigate to="/home" /> : <Navigate to="/login" />
          }
        />
      ); 
}

*/