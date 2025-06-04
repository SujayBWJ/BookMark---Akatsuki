// Get the container element by its ID
const container = document.getElementById('container');
// Get the register button element by its ID
const registerBtn = document.getElementById('register');
// Get the login button element by its ID
const loginBtn = document.getElementById('login');

// Add a click event listener to the register button
registerBtn.addEventListener('click', () => {
    // Add the "active" class to the container (show registration form)
    container.classList.add("active");
});

// Add a click event listener to the login button
loginBtn.addEventListener('click', () => {
    // Remove the "active" class from the container (show login form)
    container.classList.remove("active");
});

// Function to redirect to the index.html page
function redirect() {
    window.location.href = "/index.html";
}
