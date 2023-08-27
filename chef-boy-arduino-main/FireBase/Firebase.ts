// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtqqh-nAXEqWVjgyOQRcXqBYuccgGtsAU",
  authDomain: "io-project-f20b0.firebaseapp.com",
  projectId: "io-project-f20b0",
  storageBucket: "io-project-f20b0.appspot.com",
  messagingSenderId: "260771826437",
  appId: "1:260771826437:web:afaca454a93fc44119856c",
  measurementId: "G-H9P6SVRH1P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);