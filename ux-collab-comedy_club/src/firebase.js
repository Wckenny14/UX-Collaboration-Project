import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDL4cepeVNFC1cIHjHshB6ljvHoQLtCRjE",
  authDomain: "uxproject-2d57c.firebaseapp.com",
  projectId: "uxproject-2d57c",
  storageBucket: "uxproject-2d57c.appspot.com",
  messagingSenderId: "505042235751",
  appId: "1:505042235751:web:6522997e96595d9beeffc2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);
const db = getFirestore(app);
export const shoppingNewsletterRef = collection(db, "shoppingNewsletter");
export const weeklyNewsletterRef = collection(db, "weeklyNewsletter");

// export const provider = new GoogleAuthProvider();
export const usersRef = collection(db, "users");

// Initialize Firebase Authentication and get a reference to the service
export { auth, database, db };