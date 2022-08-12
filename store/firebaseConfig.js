// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3DcXdMSusFQPVjHgHXm90jY9MTK2b-jc",
  authDomain: "recipe-app-f14dd.firebaseapp.com",
  projectId: "recipe-app-f14dd",
  storageBucket: "recipe-app-f14dd.appspot.com",
  messagingSenderId: "1035099476902",
  appId: "1:1035099476902:web:eabb0b4ad7b1d5b3003567",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
