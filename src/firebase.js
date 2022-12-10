import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig={
  apiKey: "AIzaSyAeGALl549MkeRN5t_lt81KO62VazmEqHI",
  authDomain: "twitter-clone-udemy-5072b.firebaseapp.com",
  projectId: "twitter-clone-udemy-5072b",
  storageBucket: "twitter-clone-udemy-5072b.appspot.com",
  messagingSenderId: "477019292244",
  appId: "1:477019292244:web:0d6fde0b965df0a85ca3c1"
}

const app=initializeApp(firebaseConfig);
const db=getFirestore(app);

export default db;