// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB9-1NTgbGuNbAKb0fw-zzKA3oprG4t3o",
  authDomain: "ensa1-forum.firebaseapp.com",
  projectId: "ensa1-forum",
  storageBucket: "ensa1-forum.firebasestorage.app",
  messagingSenderId: "382288145816",
  appId: "1:382288145816:web:5bbe5c58d80ad97a084fed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth and Firestore instances
const auth = getAuth(app);
const db = getFirestore(app);

const logout = () => signOut(auth);

export { app, auth, db, logout };