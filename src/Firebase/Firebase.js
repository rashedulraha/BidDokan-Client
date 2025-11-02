// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1yfHNl86lUgSH-WOTMUS1Jk30jVusNCs",
  authDomain: "bid-dokan.firebaseapp.com",
  projectId: "bid-dokan",
  storageBucket: "bid-dokan.firebasestorage.app",
  messagingSenderId: "1085008463937",
  appId: "1:1085008463937:web:6176622a580bc447525ec0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
