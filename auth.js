import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

/* SIGN UP */
window.signup = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm");

  if (confirm && password !== confirm.value) {
    alert("Passwords do not match");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "index.html";
    })
    .catch(err => alert(err.message));
};

/* LOGIN */
window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "index.html";
    })
    .catch(err => alert(err.message));
};

/* KEEP USER LOGGED */
onAuthStateChanged(auth, user => {
  if (user) {
    console.log("Logged in:", user.email);
  }
});
