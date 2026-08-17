// =========================
// SIGN UP
// =========================
function registerUser(event) {
    event.preventDefault();

    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Indian mobile number validation
    const mobilePattern = /^[6-9]\d{9}$/;

    // Check email OR mobile number
    if (!emailPattern.test(email) && !mobilePattern.test(email)) {
        alert("Please enter a valid email or 10-digit mobile number.");
        return;
    }

    // Check password match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Get existing users
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email/mobile already exists
    const userExists = users.find(user => user.email === email);

    if (userExists) {
        alert("Account already exists! Please Sign In.");
        return;
    }

    // Save new user
    const newUser = {
        name: name,
        email: email,
        password: password
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully!");

    // Automatically log in the new user
    localStorage.setItem(
        "currentUser",
        JSON.stringify(newUser)
    );

    // Redirect to Browse page
    window.location.href = "browse.html";
}


// =========================
// LOGIN
// =========================
function loginUser(event) {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Indian mobile number validation
    const mobilePattern = /^[6-9]\d{9}$/;

    // Check email OR mobile
    if (!emailPattern.test(email) && !mobilePattern.test(email)) {
        alert("Please enter a valid email or 10-digit mobile number.");
        return;
    }

    // Get users
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Find matching user
    const validUser = users.find(
        user =>
            user.email === email &&
            user.password === password
    );

    if (validUser) {

        alert("Welcome, " + validUser.name + "!");

        localStorage.setItem(
            "currentUser",
            JSON.stringify(validUser)
        );

        // Redirect to Netflix home page
        window.location.href = "browse.html";

    } else {

        alert("Invalid email/mobile number or password!");

    }
}
window.addEventListener("DOMContentLoaded", function () {

    const savedEmail = localStorage.getItem("signupEmail");
    const signupEmail = document.getElementById("signupEmail");

    if (savedEmail && signupEmail) {
        signupEmail.value = savedEmail;
    }

});