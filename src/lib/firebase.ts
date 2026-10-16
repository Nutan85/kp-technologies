import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDr5a8Ty9ckgOoAiCoYEI4CNetzeGVLpJc",
  authDomain: "kp-technologies.firebaseapp.com",
  projectId: "kp-technologies",
  storageBucket: "kp-technologies.firebasestorage.app",
  messagingSenderId: "1011729804822",
  appId: "1:1011729804822:web:b804ceba5cf7ad3a170f37",
  measurementId: "G-NGQTL3VGB8",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
