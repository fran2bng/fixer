import React, { useState } from "react";
import { auth } from "../firebase.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    updateProfile, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signOut 
    } from 'firebase/auth';
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/userSlice.js";
import { TextField, Grid, Button } from '@mui/material'
import "./login.css"
import { dark } from "@mui/material/styles/createPalette.js";
import SignWithGoogle from "../components/SignWithGoogle.js";




export function Login() {
  // use state constants for the the form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

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
        updateProfile(userAuth.user, {
          displayName: name,
          photoURL: profilePic,
        })
          .then(
            // Dispatch the user information for persistence in the redux state
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

    <SignWithGoogle></SignWithGoogle>

      <div className="login">
        <form>
        <Grid container
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    spacing={3}>

                    <Grid item>
                        <TextField
                            type="text"
                            id="outlined-basic"
                            label="Usuario"
                            variant="outlined"
                            name='Usuario'
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            type="email"
                            id="outlined-basic"
                            label="coso"
                            variant="outlined"
                            name='Email'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            type="password"
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            name='Password'
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            />
                    </Grid>
                </Grid>
                <Button
                    type='submit'
                    onClick={loginToApp}
                >Send</Button>
        </form>

        <p>
          {"martin acm1pt "}
          <span className="login__register" onClick={register}>
            Register button
          </span>
        </p>
      </div>
    </div>
  );
}

