import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";

// Inscription
export const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);

// Connexion
export const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

// Déconnexion
export const logout = () => signOut(auth);

// Réinitialisation mot de passe
export const resetPassword = (email) => sendPasswordResetEmail(auth, email);
