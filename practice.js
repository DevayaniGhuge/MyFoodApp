// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
// import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js"; // For storing additional user info

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyAlXPqKB4EBkh4WbcTI7kVi3Qye5rxK2d0",
//     authDomain: "myfoodapp-600.firebaseapp.com",
//     databaseURL: "https://myfoodapp-600-default-rtdb.firebaseio.com",
//     projectId: "myfoodapp-600",
//     storageBucket: "myfoodapp-600.firebasestorage.app",
//     messagingSenderId: "306620797627",
//     appId: "1:306620797627:web:f55b818d4d217ff9b34f9e",
//     measurementId: "G-MHPBZ0RGT2"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth();
// const database = getDatabase(app);

// // Signup functionality
// const signupbutton = document.getElementById("signupbutton");

// signupbutton.addEventListener("click", function (event) {
//     event.preventDefault(); // Prevent default form submission behavior

//     const name = document.getElementById("name").value;
//     const contact = document.getElementById("contact").value;
//     const gender = document.getElementById("gender").value;
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     const confirmpassword = document.getElementById("confirmpassword").value;

//     if (password !== confirmpassword) {
//         alert("Passwords do not match!");
//         return;
//     }

//     createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             const user = userCredential.user;
//             alert("Account created successfully!");

//             // Save additional user data to Realtime Database
//             set(ref(database, "users/" + user.uid), {
//                 name: name,
//                 contact: contact,
//                 gender: gender,
//                 email: email
//             })
//                 .then(() => {
//                     alert("User data saved successfully!");
//                 })
//                 .catch((error) => {
//                     console.error("Error saving user data:", error.message);
//                 });
//         })
//         .catch((error) => {
//             alert(`Error: ${error.message} (Code: ${error.code})`);
//         });
// });

// // Login functionality
// const loginbutton = document.getElementById("loginbutton");

// loginbutton.addEventListener("click", function (event) {
//     event.preventDefault(); // Prevent default form submission behavior

//     const email = document.getElementById("username").value;
//     const password = document.getElementById("password").value;

//     signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             const user = userCredential.user;
//             alert("Login successful!");

//             // Redirect to index.html
//             window.location.href = "index.html";
//         })
//         .catch((error) => {
//             alert(`Login failed: ${error.message} (Code: ${error.code})`);
//         });
// });














// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
// import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js"; // For storing additional user info

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyAlXPqKB4EBkh4WbcTI7kVi3Qye5rxK2d0",
//     authDomain: "myfoodapp-600.firebaseapp.com",
//     databaseURL: "https://myfoodapp-600-default-rtdb.firebaseio.com",
//     projectId: "myfoodapp-600",
//     storageBucket: "myfoodapp-600.firebasestorage.app",
//     messagingSenderId: "306620797627",
//     appId: "1:306620797627:web:f55b818d4d217ff9b34f9e",
//     measurementId: "G-MHPBZ0RGT2"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth();
// const database = getDatabase(app);

// // Signup functionality
// const signupbutton = document.getElementById("signupbutton");

// signupbutton.addEventListener("click", function (event) {
//     event.preventDefault(); // Prevent default form submission behavior

//     const name = document.getElementById("name").value;
//     const contact = document.getElementById("contact").value;
//     const gender = document.getElementById("gender").value;
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     const confirmpassword = document.getElementById("confirmpassword").value;

//     // Check if passwords match
//     if (password !== confirmpassword) {
//         alert("Passwords do not match!");
//         return;
//     }

//     // Create user with email and password
//     createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             const user = userCredential.user;
//             alert("Account created successfully!");

//             // Save user data to Firebase Realtime Database
//             set(ref(database, "users/" + user.uid), {
//                 name: name,
//                 contact: contact,
//                 gender: gender,
//                 email: email
//             })
//                 .then(() => {
//                     alert("User data saved successfully!");
//                 })
//                 .catch((error) => {
//                     console.error("Error saving user data:", error.message);
//                 });
//         })
//         .catch((error) => {
//             alert(`Error: ${error.message} (Code: ${error.code})`);
//         });
// });

// // Login functionality
// const loginbutton = document.getElementById("loginbutton");

// loginbutton.addEventListener("click", function (event) {
//     event.preventDefault(); // Prevent default form submission behavior

//     const email = document.getElementById("username").value;
//     const password = document.getElementById("password").value;

//     // Login user with email and password
//     signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             const user = userCredential.user;

//             // Fetch user data from Firebase
//             const userRef = ref(database, "users/" + user.uid);
//             get(userRef)
//                 .then((snapshot) => {
//                     if (snapshot.exists()) {
//                         const userData = snapshot.val();
//                         alert(`Welcome back, ${userData.name}!`);
                        
//                         // Redirect to index.html
//                         window.location.href = "index.html";
//                     } else {
//                         alert("User data not found!");
//                     }
//                 })
//                 .catch((error) => {
//                     console.error("Error fetching user data:", error.message);
//                 });
//         })
//         .catch((error) => {
//             alert(`Login failed: ${error.message} (Code: ${error.code})`);
//         });
// });

// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, setPersistence, browserLocalPersistence } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
// import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

// // Your Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyAlXPqKB4EBkh4WbcTI7kVi3Qye5rxK2d0",
//     authDomain: "myfoodapp-600.firebaseapp.com",
//     databaseURL: "https://myfoodapp-600-default-rtdb.firebaseio.com",
//     projectId: "myfoodapp-600",
//     storageBucket: "myfoodapp-600.firebasestorage.app",
//     messagingSenderId: "306620797627",
//     appId: "1:306620797627:web:f55b818d4d217ff9b34f9e",
//     measurementId: "G-MHPBZ0RGT2"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth();
// const database = getDatabase(app);

// // Enable first-party cookies
// setPersistence(auth, browserLocalPersistence)
//     .then(() => {
//         console.log("First-party cookies enabled.");
//     })
//     .catch((error) => {
//         console.error("Error enabling persistence:", error);
//     });

// // Signup functionality
// document.getElementById("signupbutton").addEventListener("click", function (event) {
//     event.preventDefault();

//     const name = document.getElementById("name").value;
//     const contact = document.getElementById("contact").value;
//     const gender = document.getElementById("gender").value;
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     const confirmpassword = document.getElementById("confirmpassword").value;

//     if (password !== confirmpassword) {
//         alert("Passwords do not match!");
//         return;
//     }

//     createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             const user = userCredential.user;
//             alert("Account created successfully!");

//             // Save user data
//             set(ref(database, "users/" + user.uid), {
//                 name: name,
//                 contact: contact,
//                 gender: gender,
//                 email: email
//             })
//                 .then(() => alert("User data saved successfully!"))
//                 .catch((error) => console.error("Error saving data:", error));
//         })
//         .catch((error) => alert(`Error: ${error.message} (Code: ${error.code})`));
// });

// // Login functionality
// document.getElementById("loginbutton").addEventListener("click", function (event) {
//     event.preventDefault();

//     const email = document.getElementById("username").value;
//     const password = document.getElementById("password").value;

//     signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             alert("Login successful!");
//             window.location.href = "index.html";
//         })
//         .catch((error) => alert(`Login failed: ${error.message} (Code: ${error.code})`));
// });