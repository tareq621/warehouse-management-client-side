// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHxPuuZpGylZ1WnMW45X_c4CCuMp5JDM0",
    authDomain: "car-ride-pool.firebaseapp.com",
    projectId: "car-ride-pool",
    storageBucket: "car-ride-pool.appspot.com",
    messagingSenderId: "597466586116",
    appId: "1:597466586116:web:1404181cea5c6acf826951"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;