// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC3_WkDq-Mm35S5sKuFi-AVHG5Y3_cFehw",
    authDomain: "ye-group-agency.firebaseapp.com",
    projectId: "ye-group-agency",
    storageBucket: "ye-group-agency.appspot.com",
    messagingSenderId: "742707721962",
    appId: "1:742707721962:web:caf69847eb78f1ea368993",
    measurementId: "G-RV3YX1314N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore()
