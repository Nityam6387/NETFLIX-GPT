// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpT4kcu4lDaloU8Fxau1LjQYcn_w3lpNg",
  authDomain: "netflixgpt-ea234.firebaseapp.com",
  projectId: "netflixgpt-ea234",
  storageBucket: "netflixgpt-ea234.firebasestorage.app",
  messagingSenderId: "934766066135",
  appId: "1:934766066135:web:0c2e51eb49a07c166ab392",
  measurementId: "G-DZLN94DZN2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


//steps of deployment on firebase google...

/*npm install -g firebase-tools  (install firbase CLI)
firebase login
firebase init
firebase deploy*/

export const auth = getAuth();