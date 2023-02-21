import "../App.css";
import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../redux/slices/userSlice.js";
import { auth } from "../firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import {NavLink, Outlet, useNavigate } from "react-router-dom";
import Page from "./Home";


export default function ProtectedRoute({}) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        Navigate("/home")
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

  if (!user) {
    return (
      <div className="unauthorized">
        <h1>Unauthorized :</h1>
        <span>
          <NavLink to="/login">Please Login</NavLink> to gain access
        </span>
      </div>
    );
  }
  return <Outlet />;
}
