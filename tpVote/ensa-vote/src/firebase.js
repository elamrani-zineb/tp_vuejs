// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZc29A_A0_nqXt9luKKLxR1o1fOKqw6QM",
  authDomain: "ensa-vote-5a587.firebaseapp.com",
  projectId: "ensa-vote-5a587",
  storageBucket: "ensa-vote-5a587.firebasestorage.app",
  messagingSenderId: "173893214244",
  appId: "1:173893214244:web:8c86be58882eb04e0f78b1",
  measurementId: "G-JNGQV476L2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Exports used across the app
export const auth = getAuth(app);
export const db = getFirestore(app);
