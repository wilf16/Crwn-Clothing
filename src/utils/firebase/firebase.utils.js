// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  onAuthStateChanged,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

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

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(app);

// Detect auth state
onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log("logged in!");
  } else {
    console.log("No user");
  }
});

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
