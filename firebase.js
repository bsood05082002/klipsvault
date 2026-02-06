import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAbOIjPMrvIwEo05CbmX8501aAlDFLXNWw",
  authDomain: "klipsvault.firebaseapp.com",
  projectId: "klipsvault",
  storageBucket: "klipsvault.firebasestorage.app",
  messagingSenderId: "217863719104",
  appId: "1:217863719104:web:4000a647494059a8f70525",
  measurementId: "G-LQ5K1GH8CP"};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
