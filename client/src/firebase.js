// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-2a484.firebaseapp.com",
  projectId: "real-estate-2a484",
  storageBucket: "real-estate-2a484.appspot.com",
  messagingSenderId: "1042020963077",
  appId: "1:1042020963077:web:8ef1a0ae10eb5fa8a79d6c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);