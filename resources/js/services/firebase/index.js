// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDAPP5bi91iPy2qEqAJcxFxUR3OswJIk_0",
    authDomain: "ecommerce-bench.firebaseapp.com",
    databaseURL: "gs://ecommerce-bench.appspot.com", 
    projectId: "ecommerce-bench",
    storageBucket: "ecommerce-bench.appspot.com",
    messagingSenderId: "276199411318",
    appId: "1:276199411318:web:3de9364f331ef03e355957",
    measurementId: "G-T9DK1FSN2J"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };