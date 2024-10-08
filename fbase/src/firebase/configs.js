import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_firebAPI,
  authDomain: "just-a-bit-of-vue-practice.firebaseapp.com",
  projectId: "just-a-bit-of-vue-practice",
  storageBucket: "just-a-bit-of-vue-practice.appspot.com",
  messagingSenderId: "729876504191",
  appId: "1:729876504191:web:a7b3ee051dc5158879e94a",
};

initializeApp(firebaseConfig);

const DB = getFirestore();
const AUTH = getAuth();

export  { DB, AUTH };
