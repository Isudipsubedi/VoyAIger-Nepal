// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvB6av2oz-4K33lAlsJZpAHb51Uli_bBc",
  authDomain: "voyaiger-nepal-535e9.firebaseapp.com",
  projectId: "voyaiger-nepal-535e9",
  storageBucket: "voyaiger-nepal-535e9.appspot.com",
  messagingSenderId: "292104007451",
  appId: "1:292104007451:web:8fdc6a12d6b997eeb8adbe",
  measurementId: "G-EZPH7F7F4Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

 

