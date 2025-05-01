// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsBhQweCea2BPYOb82LIw5Pbaul9wi100",
  authDomain: "student-dashbord-c110b.firebaseapp.com",
  projectId: "student-dashbord-c110b",
  storageBucket: "student-dashbord-c110b.firebasestorage.app",
  messagingSenderId: "362814652268",
  appId: "1:362814652268:web:3528f667db542b82a97d49",
  measurementId: "G-BWQHGG09QR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export {app, auth}