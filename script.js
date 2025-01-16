function navigateToindexpage(event) {
  // Prevent default form submission
  event.preventDefault();

  // Get input values
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // Define valid credentials (replace these with actual ones)
//   const validUsername = 'admin'; // Your valid username
//   const validPassword = '1234'; // Your valid password

  // Validate username and password
  if (username !== null && password !== null) {
    // Redirect to index.html
    window.location.href = 'index.html';
  } else {
    // Show an error message if invalid
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = 'Invalid username or password. Please try again.';
    errorMessage.style.color = 'red';
  }

  // Return false to prevent form submission by default
  return false;
}

