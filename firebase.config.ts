import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyAsEXUKUr4MyCVJECxoUC9H6zdaWPbjAn8",

    authDomain: "cinnamate-a8d29.firebaseapp.com",

    projectId: "cinnamate-a8d29",

    storageBucket: "cinnamate-a8d29.appspot.com",

    messagingSenderId: "729411846469",

    appId: "1:729411846469:web:468775472a4d083bc7fe2c",

    measurementId: "G-7G66DD15V7"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db: Firestore = getFirestore(app)
export default db;