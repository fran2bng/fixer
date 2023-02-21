import React, { useState } from "react";
import { auth } from "../firebase.js";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/userSlice.js";
import { TextField, Grid, Button } from "@mui/material";
import "./login.css";
import SignWithGoogle from "../components/SignWithGoogle.js";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const loginToApp = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoURL,
          })
        );
      })

      .catch((err) => {
        alert(err);
      });
  };

  const register = () => {
    if (!name) {
      return alert("Please enter a full name");
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        Navigate("/home");
        updateProfile(userAuth.user, {
          displayName: name,
          photoURL: profilePic,
        })
          .then(
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            )
          )
          .catch((error) => {
            console.log("user not updated");
          });
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
  
    <div>
     <div>or login with   <SignWithGoogle /></div>
      <div className="login">
        <form>
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={3}
          >
            <Grid item>
              <TextField
                type="text"
                id="user"
                label="Usuario"
                variant="outlined"
                name="Usuario"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </Grid>
            <Grid item>
              <TextField
                type="email"
                id="email"
                label="email"
                variant="outlined"
                name="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </Grid>
            <Grid item>
              <TextField
                type="password"
                id="password"
                label="Password"
                variant="outlined"
                name="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </Grid>
          </Grid>

          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={0}
          >
            <Grid item>
              <button
                className="button"
                variant="outlined"
                type="submit"
                onClick={loginToApp}
              >
                Send
              </button>
            </Grid>

            <Grid container></Grid>
          </Grid>
        </form>
        <p>
          {"Sign up Here "}
          <span className="login__register" onClick={register}>
            BUTTON 
          </span>
        </p>
      </div>
     
    </div> 
  );
}
