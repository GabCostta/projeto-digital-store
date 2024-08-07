// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfpd91OQaqLX2opx9rViZLPrQwT4JHOGk",
  authDomain: "digitalcollege-ca00a.firebaseapp.com",
  projectId: "digitalcollege-ca00a",
  storageBucket: "digitalcollege-ca00a.appspot.com",
  messagingSenderId: "1043845180788",
  appId: "1:1043845180788:web:2e08ebbf9c9171924c9021",
  measurementId: "G-W7LEC50NZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // Handle successful login
      console.log(result.user);
    })
    .catch((error) => {
      // Handle Errors here.
      console.error(error);
    });
};

export { auth, signInWithGoogle };
