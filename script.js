document.querySelectorAll(".faq-item button").forEach(btn=>{

btn.addEventListener("click",()=>{

const item=btn.parentElement;

item.classList.toggle("active");

const icon=btn.querySelector("i");

icon.classList.toggle("fa-plus");
icon.classList.toggle("fa-xmark");

});

});
function getStarted() {
    const emailInputs = document.querySelectorAll('input[type="email"]');

    // Get the email from the first visible input
    let email = "";

    for (const input of emailInputs) {
        if (input.value.trim() !== "") {
            email = input.value.trim();
            break;
        }
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Save email so signup page can use it
    localStorage.setItem("signupEmail", email);

    // Redirect to signup page
    window.location.href = "signup.html";
}