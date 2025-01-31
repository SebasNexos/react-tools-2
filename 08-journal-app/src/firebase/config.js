// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'; 
import {getFirestore} from 'firebase/firestore/lite'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5VtXv9lrfwytfOWS1RThes3-0_FW1ZqM",
  authDomain: "course-react-4bb1b.firebaseapp.com",
  projectId: "course-react-4bb1b",
  storageBucket: "course-react-4bb1b.firebasestorage.app",
  messagingSenderId: "474287276515",
  appId: "1:474287276515:web:5d2f726e327da4d00320d6"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );
