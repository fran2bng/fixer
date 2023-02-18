import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from '../../redux/slices/userSlice.js';
import { auth } from '../../firebase.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { Route, Navigate, Routes, } from "react-router-dom";
import App from '../../App.js';
import { Login } from '../Login.js';
import { PrivateRoute } from './ProtectedRoute.js';


