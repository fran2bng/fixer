// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
getAuth, 
createUserWithEmailAndPassword, 
updateProfile, 
onAuthStateChanged, 
signInWithEmailAndPassword, 
signOut 
} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkbUShBfKBEjdHIHrvunsjMf2VJPZ8Y54",
  authDomain: "fixer-basic.firebaseapp.com",
  projectId: "fixer-basic",
  storageBucket: "fixer-basic.appspot.com",
  messagingSenderId: "330466710045",
  appId: "1:330466710045:web:67408e992777d152996cf4",
  measurementId: "G-VH3JJ7JKL5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app)

