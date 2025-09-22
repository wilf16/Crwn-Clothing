// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { use } from "react";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeUsnyCxuIpiuWaPlqOTLh-G-zMqclDBY",
  authDomain: "crwn-clothing-db-6e1a6.firebaseapp.com",
  projectId: "crwn-clothing-db-6e1a6",
  storageBucket: "crwn-clothing-db-6e1a6.firebasestorage.app",
  messagingSenderId: "889088551818",
  appId: "1:889088551818:web:01c65a51609afa296e7673",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log("User snapshot:", userSnapshot);
  console.log("User exist:", userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("Error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  const response = await createUserWithEmailAndPassword(auth, email, password);
  return response;
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  const response = await signInWithEmailAndPassword(auth, email, password);
  return response;
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
