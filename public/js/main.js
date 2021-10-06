import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlpvLb__kOzu-lff1UyljPAlDvklXFMKw",
    authDomain: "ueducate-9c399.firebaseapp.com",
    databaseURL: "https://ueducate-9c399-default-rtdb.firebaseio.com",
    projectId: "ueducate-9c399",
    storageBucket: "ueducate-9c399.appspot.com",
    messagingSenderId: "614987821702",
    appId: "1:614987821702:web:53458c12111b708d07d707"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('gSignup').addEventListener('click', function(){
    const provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
})
