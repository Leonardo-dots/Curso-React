// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlQxF6lWetOPVLhmbNIIKJXgHmPc00HrY",
  authDomain: "coderhouse-firebase-dd34c.firebaseapp.com",
  projectId: "coderhouse-firebase-dd34c",
  storageBucket: "coderhouse-firebase-dd34c.firebasestorage.app",
  messagingSenderId: "856400402997",
  appId: "1:856400402997:web:4725e3cab6fe98e9b5af7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)