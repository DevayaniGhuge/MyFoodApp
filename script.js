import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, setPersistence, browserLocalPersistence } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

// Firebase configuration
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
const auth = getAuth();
const database = getDatabase(app);

// Enable first-party cookies
setPersistence(auth, browserLocalPersistence)
    .then(() => console.log("First-party cookies enabled."))
    .catch((error) => console.error("Error enabling persistence:", error));

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Signup functionality
    const signupbutton = document.getElementById("signupbutton");
    if (signupbutton) {
        signupbutton.addEventListener("click", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const contact = document.getElementById("contact").value.trim();
            const gender = document.getElementById("gender").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value;
            const confirmpassword = document.getElementById("confirmpassword").value;

            // Validate fields
            if (!name || !contact || !gender || !email || !password || !confirmpassword) {
                alert("Please fill out all fields.");
                return;
            }

            // Validate password complexity
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
            if (!passwordRegex.test(password)) {
                alert("Password must be at least 8 characters long and include a number, a special character, and both uppercase and lowercase letters.");
                return;
            }
        
            if (password !== confirmpassword) {
                alert("Passwords do not match!");
                return;
            }

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    alert("Account created successfully!");

                    // Save user data
                    set(ref(database, "users/" + user.uid), {
                        name: name,
                        contact: contact,
                        gender: gender,
                        email: email
                    })
                        .then(() =>{
                            alert("User data saved successfully!");
                            window.location.href = "login.html" ; 
                        })
                        .catch((error) => console.error("Error saving data:", error));
                })
                .catch((error) => alert(`Error: ${error.message} (Code: ${error.code})`));
        });
    }

    // Login functionality
    const loginbutton = document.getElementById("loginbutton");
    if (loginbutton) {
        loginbutton.addEventListener("click", function (event) {
            event.preventDefault();

            const email = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value;

            // Validate fields
            if (!email || !password) {
                alert("Please enter both email and password.");
                return;
            }

            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    alert("Login successful!");
                    window.location.href = "index.html"; // Redirect to index.html
                })
                .catch((error) => alert(`Login failed: ${error.message} (Code: ${error.code})`));
        });
    }
});

// Toggle password visibility
function togglePassword(fieldId) {
    const field = document.getElementById(fieldId);
    const type = field.type === "password" ? "text" : "password";
    field.type = type;
}
