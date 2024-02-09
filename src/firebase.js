import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvryYIE4VUwnAbdEBnffYp0uSHZtVYXZQ",
  authDomain: "package-tracker-fb660.firebaseapp.com",
  projectId: "package-tracker-fb660",
  storageBucket: "package-tracker-fb660.appspot.com",
  messagingSenderId: "1081504090376",
  appId: "1:1081504090376:web:accb43c55c1ea5eb2ac4bd"
};

if(!firebase.apps.length)
{
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}

export { firebase };