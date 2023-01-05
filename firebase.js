import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAnxjUZUdfph3l7eTcSynolWeFUOZnLEb4",
  authDomain: "nativemovies-fe9f2.firebaseapp.com",
  projectId: "nativemovies-fe9f2",
  storageBucket: "nativemovies-fe9f2.appspot.com",
  messagingSenderId: "846671420497",
  appId: "1:846671420497:web:9eed59f629b170d20cac70",
  measurementId: "G-TXYS3GSBQX",
};

const app = initializeApp(firebaseConfig);
export const dbService = getFirestore(app);
export const authService = getAuth(app);
