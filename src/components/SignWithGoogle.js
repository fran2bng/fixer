import React from 'react'
import {GoogleAuthProvider, onAuthStateChanged, signInWithPopup} from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from "react-router-dom";

function SignWithGoogle() {

    async function handleOnClick() {
        const googleProvider = new GoogleAuthProvider();
        await signInWithGoogle(googleProvider);
    
        async function signInWithGoogle(googleProvider) {
          try {
            const res = await signInWithPopup(auth, googleProvider);
            console.log(res);
          } catch (error) {
            console.error(error);
          }
        }
      }
       
      
  return (
    <div>
      <button onClick={handleOnClick}>Logeate con Google</button>
    </div>
  )
}

export default SignWithGoogle