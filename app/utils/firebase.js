
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB17wofyeQGgPDat1sxFzPiNI3_B1yyx00",
  authDomain: "expense-tracker-b4d7c.firebaseapp.com",
  projectId: "expense-tracker-b4d7c",
  storageBucket: "expense-tracker-b4d7c.appspot.com",
  messagingSenderId: "447346617976",
  appId: "1:447346617976:web:70ce4dc954993f455b078d",
  measurementId: "G-CHPWYB4519"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);