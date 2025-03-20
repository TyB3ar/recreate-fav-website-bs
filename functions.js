// Form Validation for UserName and Password
const form = document.getElementById("login-form");

// Array for User Info (Username and Password)
const regUser = [
    {userId: 'username', password : 'password'}
]; 

// Primary Function for Validating Username and Password 
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;


    let isValid = true;
    document.getElementById("username-error").textContent = "";
    document.getElementById("password-error").textContent = "";

    // Regex for Username Validation 
    const userRegex = /^[a-zA-Z0-9_]{3,15}$/;
    if (!userRegex.test(user)) {
        document.getElementById("username-error").textContent = 
            "Username must be 3-15 characters (Letters, Numbers, Underscores).";
        isValid = false;
    } else{
        isValid = true; 
        regUser.push(regUser.userId, user) // If username is valid, add username to regUser array 
    }

    // Regex for Password Validation
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    if (!passRegex.test(pass)) {
        document.getElementById("password-error").textContent = 
            "Password must have 8+ characters (1 uppercase, 1 number, 1 special character)";
        isValid = false;
    } else {
        isValid = true;
        regUser.push(regUser.password, pass) // if password is valid, add password to regUser array 
    }

});

// Check Username and Password

const users = regUser.find(
    u => u.userId === form.user.value && 
         u.password === form.pass.value); 