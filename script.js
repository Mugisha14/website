document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get the input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Define the correct credentials
    const correctUsername = " " ;
    const correctPassword = " " ;
    
    // Get the error message element
    const errorMessage = document.getElementById('error-message');
    
    // Validate the credentials
    if (username  && password ) {
        // Redirect or show success message
        window.location.href = 'index.html'; // Change this to your success page
    } else {
        // Show error message
        errorMessage.textContent = 'Invalid username or password. Please try again.';
    }
});
