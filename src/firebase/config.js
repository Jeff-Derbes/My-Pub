import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2sadSEajCRMCsZpHM8aZDHFQfcpyltTU",
  authDomain: "authtest-bfc7e.firebaseapp.com",
  projectId: "authtest-bfc7e",
  storageBucket: "authtest-bfc7e.appspot.com",
  messagingSenderId: "363514093379",
  appId: "1:363514093379:web:c8c50dbba03a15ffd399f6",
};

//init firebase
initializeApp(firebaseConfig);

//init firebase auth
const auth = getAuth();

//init firestore
const db = getFirestore();

export { db, auth };
