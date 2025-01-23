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

// Show the loader
function showLoader() {
    const loaderOverlay = document.getElementById("loader-overlay");
    if (loaderOverlay) {
        loaderOverlay.style.display = "flex";
    }
}

// Hide the loader
function hideLoader() {
    const loaderOverlay = document.getElementById("loader-overlay");
    if (loaderOverlay) {
        loaderOverlay.style.display = "none";
    }
}

// Utility function to handle timeouts
function withTimeout(callback, timeout = 500) {
    showLoader();
    setTimeout(() => callback(), timeout);
}

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Signup functionality
    const signupbutton = document.getElementById("signupbutton");
    if (signupbutton) {
        signupbutton.addEventListener("click", function (event) {
            event.preventDefault();

            const name = document.getElementById("name")?.value.trim() ?? "";
            const contact = document.getElementById("contact")?.value.trim() ?? "";
            const gender = document.getElementById("gender")?.value.trim() ?? "";
            const email = document.getElementById("email")?.value.trim() ?? "";
            const password = document.getElementById("password")?.value ?? "";
            const confirmpassword = document.getElementById("confirmpassword")?.value ?? "";

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

            // message.style.color='red';
            // message.textContent='hello';

            withTimeout(() => {
                createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        return set(ref(database, "users/" + user.uid), {
                            name: name,
                            contact: contact,
                            gender: gender,
                            email: email
                        });
                    })
                    .then(() => {
                        alert("Account created and user data saved successfully!");
                        hideLoader();
                        window.location.href = "login.html";
                    })
                    .catch((error) => {
                        hideLoader();
                        alert(`Error: ${error.message} (Code: ${error.code})`);
                    });
            });
        });
    }
    // Login functionality
    const loginbutton = document.getElementById("loginbutton");

    if (loginbutton) {
        loginbutton.addEventListener("click", function (event) {
            event.preventDefault();

            const email = document.getElementById("username")?.value.trim() ?? "";
            const password = document.getElementById("password")?.value ?? "";

            // Validate fields
            if (!email || !password) {
                alert("Please enter both email and password.");
                return;
            }

            withTimeout(() => {
                signInWithEmailAndPassword(auth, email, password)
                    .then(() => {
                        alert("Login successful!");
                        // message.style.color='red';
                        // message.textContent='Login Successfully!';
                        hideLoader();
                        window.location.href = "index.html";
                    })
                    .catch((error) => {
                        hideLoader();
                        alert(`Login failed: ${error.message} (Code: ${error.code})`);
                    });
            });
        });
    }
});

