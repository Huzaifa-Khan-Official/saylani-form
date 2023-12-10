import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyDBc-Pl4KzZp5LtV72iJ_UlgYAW5NbDrdg",
    authDomain: "saylani-form-clone.firebaseapp.com",
    projectId: "saylani-form-clone",
    storageBucket: "saylani-form-clone.appspot.com",
    messagingSenderId: "484217162335",
    appId: "1:484217162335:web:da892ec4634e7cbb86e9ea"
};

const app = initializeApp(firebaseConfig);

export {app};