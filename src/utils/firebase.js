// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "techjupyter-f0f0d.firebaseapp.com",
  projectId: "techjupyter-f0f0d",
  storageBucket: "techjupyter-f0f0d.appspot.com",
  messagingSenderId: "218890844120",
  appId: "1:218890844120:web:fc188f966de62a80ca24ad",
  measurementId: "G-ZECKJCBETS",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
