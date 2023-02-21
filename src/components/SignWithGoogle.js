import React from "react";
import { GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { auth } from "../firebase";
import "../routes/login.css";

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
      <button className="log" onClick={handleOnClick}>
        Logeate con Google
      </button>
    </div>
  );
}

export default SignWithGoogle;
