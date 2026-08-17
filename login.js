// =====================================
// SIGN UP
// =====================================

function registerUser(event) {

    event.preventDefault();

    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Check password match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Get existing users
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    const userExists = users.find(user => user.email === email);

    if (userExists) {
        alert("Account already exists! Please Sign In.");
        return;
    }

    // Create new user
    const newUser = {
        name: name,
        email: email,
        password: password
    };

    // Save user
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    // Automatically log in
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    alert("Account created successfully!");

    // Redirect to Browse page
    window.location.href = "browse.html";
}



// =====================================
// LOGIN
// =====================================

// =====================================
// LOGIN
// =====================================

function loginUser(event) {
    event.preventDefault();

    const loginInput = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobilePattern = /^[6-9]\d{9}$/;

    // Check email or mobile number
    if (!emailPattern.test(loginInput) && !mobilePattern.test(loginInput)) {
        alert("Please enter a valid email or 10-digit mobile number.");
        return;
    }

    // Get registered users
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Find matching user
    const validUser = users.find(
        user =>
            user.email === loginInput &&
            user.password === password
    );

    // Login successful
    if (validUser) {

        localStorage.setItem(
            "currentUser",
            JSON.stringify(validUser)
        );

        alert("Welcome, " + validUser.name + "!");

        // Go to Netflix home page
        window.location.href = "browse.html";

    } else {

        alert("Invalid email/mobile number or password!");

    }
}



// =====================================
// LOGOUT (Optional)
// =====================================

function logoutUser() {

    localStorage.removeItem("currentUser");

    window.location.href = "index.html";

}