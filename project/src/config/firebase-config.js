// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from 'firebase/firestore';


// when we import from firebase we use 'firebase/serviceName' -> serviceName = auth

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC_BE-UBUgT526jWrh2YuDB0y5AgAGn98",
  authDomain: "expense-tracker-5c6f6.firebaseapp.com",
  projectId: "expense-tracker-5c6f6",
  storageBucket: "expense-tracker-5c6f6.appspot.com",
  messagingSenderId: "1000429755152",
  appId: "1:1000429755152:web:0289afd26ebe85fd912395",
  measurementId: "G-1K0RWN7WVF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app); 

// firebase login
// firebase init
// firebase deploy