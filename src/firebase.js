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
import { getFirestore } from "firebase/firestore";

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

