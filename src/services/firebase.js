// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjlREGzKRFkAgXP8wqI7mPLd-EarpXSWQ",
  authDomain: "cursoreact-ec90b.firebaseapp.com",
  projectId: "cursoreact-ec90b",
  storageBucket: "cursoreact-ec90b.appspot.com",
  messagingSenderId: "1041935750671",
  appId: "1:1041935750671:web:47adf492fd0305d458b57a"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

export default FirebaseApp