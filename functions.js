// Form Validation for UserName and Password
const form = document.getElementById("login-form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;


    let isValid = true;
    document.getElementById("username-error").textContent = "";
    document.getElementById("password-error").textContent = "";

    const userRegex = /^[a-zA-Z0-9_]{3,15}$/;
    if (!userRegex.test(user)) {
        document.getElementById("username-error").textContent = 
            "Username must be 3-15 characters (Letters, Numbers, Underscores).";
        isValid = false;
    }

    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    if (!passRegex.test(pass)) {
        document.getElementById("password-error").textContent = 
            "Password must have 8+ characters (1 uppercase, 1 number, 1 special character)";
        isValid = false;
    }
});

// Fetch User Data for Login (Username and Password) 