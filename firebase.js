// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-n4to3bniyQa-RotW0becjOd7yRvA5j4",
  authDomain: "laundry-application-3e648.firebaseapp.com",
  projectId: "laundry-application-3e648",
  storageBucket: "laundry-application-3e648.appspot.com",
  messagingSenderId: "1072210571686",
  appId: "1:1072210571686:web:3a3864c8d1b77e40261f67",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
