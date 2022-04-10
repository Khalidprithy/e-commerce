// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAMsVF2OZKIvpJZheSf7Mxl1BQ6fuiB5SY",
    authDomain: "e-coma-site.firebaseapp.com",
    projectId: "e-coma-site",
    storageBucket: "e-coma-site.appspot.com",
    messagingSenderId: "526965951735",
    appId: "1:526965951735:web:5bad85650e5db49fce97f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;