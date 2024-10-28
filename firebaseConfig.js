// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU78FTE3pKlXbzEzYK26UfZP0N7Kxbb2o",
  authDomain: "itstoufiqsfitness-form.firebaseapp.com",
  projectId: "itstoufiqsfitness-form",
  storageBucket: "itstoufiqsfitness-form.appspot.com",
  messagingSenderId: "194803769873",
  appId: "1:194803769873:web:2ec7e92615d5ce1d2087b0",
  measurementId: "G-NZJ7ZBB5HX"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();  
const googleProvider = new firebase.auth.GoogleAuthProvider();
export { db, auth, googleProvider };



