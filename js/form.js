import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBlpvLb__kOzu-lff1UyljPAlDvklXFMKw",
    authDomain: "ueducate-9c399.firebaseapp.com",
    projectId: "ueducate-9c399",
    storageBucket: "ueducate-9c399.appspot.com",
    messagingSenderId: "614987821702",
    appId: "1:614987821702:web:53458c12111b708d07d707"
})

const auth = getAuth(firebaseApp)

function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = createUserWithEmailAndPassword(auth, email.value, password.value);
    
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
}
