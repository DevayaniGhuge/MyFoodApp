import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js"; // For storing additional user info

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAlXPqKB4EBkh4WbcTI7kVi3Qye5rxK2d0",
    authDomain: "myfoodapp-600.firebaseapp.com",
    databaseURL: "https://myfoodapp-600-default-rtdb.firebaseio.com",
    projectId: "myfoodapp-600",
    storageBucket: "myfoodapp-600.firebasestorage.app",
    messagingSenderId: "306620797627",
    appId: "1:306620797627:web:f55b818d4d217ff9b34f9e",
    measurementId: "G-MHPBZ0RGT2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const database = getDatabase(app);

// For submit button
const signupbutton = document.getElementById("signupbutton");

signupbutton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get form values
    const name = document.getElementById("name").value;
    const contact = document.getElementById("contact").value;
    const gender = document.getElementById("gender").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmpassword = document.getElementById("confirmpassword").value;

    // Validate password match
    if (password !== confirmpassword) {
        alert("Passwords do not match!");
        return;
    }

    // Create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up successfully
            const user = userCredential.user;
            alert("Account created successfully!");

            // Save additional user data to Realtime Database
            set(ref(database, "users/" + user.uid), {
                name: name,
                contact: contact,
                gender: gender,
                email: email
            })
                .then(() => {
                    alert("User data saved successfully!");
                })
                .catch((error) => {
                    console.error("Error saving user data:", error.message);
                });
        })
        .catch((error) => {
            // Handle errors
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Error: ${errorMessage} (Code: ${errorCode})`);
        });
});
