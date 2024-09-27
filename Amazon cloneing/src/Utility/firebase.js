import firebase from "firebase/compat/app";
import {getAuth} from 'firebase/auth'
import "firebase/compat/firestore"
import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW8hoVB8QvE0ls_ujIPwcJTJwQqMrLN3M",
  authDomain: "clone-426e7.firebaseapp.com",
  projectId: "clone-426e7",
  storageBucket: "clone-426e7.appspot.com",
  messagingSenderId: "246138555785",
  appId: "1:246138555785:web:eb0ee423279ccedb7be558"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();