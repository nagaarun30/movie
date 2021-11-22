// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeUFAJ-qdh-_aPAV3Jbx7supXoblPagvU",
  authDomain: "moview-c4c99.firebaseapp.com",
  projectId: "moview-c4c99",
  storageBucket: "moview-c4c99.appspot.com",
  messagingSenderId: "285100135703",
  appId: "1:285100135703:web:7020b5ae33597390cdd352"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);