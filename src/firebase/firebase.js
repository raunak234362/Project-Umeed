// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkuzQtr4gzrXUQHhvld3Ka-HGfDIxmXog",
  authDomain: "umeedkiran-82ca2.firebaseapp.com",
  databaseURL: "https://umeedkiran-82ca2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "umeedkiran-82ca2",
  storageBucket: "umeedkiran-82ca2.firebasestorage.app",
  messagingSenderId: "139017774571",
  appId: "1:139017774571:web:dfd3109abed1aab1e9e5ae",
  measurementId: "G-SDHY4RDW84",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
