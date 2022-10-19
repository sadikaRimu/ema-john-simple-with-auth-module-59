// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDitmfUk1MOYEGANfGgKTAqKH3nc9dBKs8",
    authDomain: "dragon-news-b1ee8.firebaseapp.com",
    projectId: "dragon-news-b1ee8",
    storageBucket: "dragon-news-b1ee8.appspot.com",
    messagingSenderId: "863343886264",
    appId: "1:863343886264:web:e2e3bfa82f1b258995194d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;