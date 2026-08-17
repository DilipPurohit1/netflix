/* =============================
   PROFILE DROPDOWN
============================= */

const profileIcon = document.getElementById("profileIcon");
const dropdownMenu = document.getElementById("dropdownMenu");

if (profileIcon && dropdownMenu) {

    profileIcon.addEventListener("click", function (e) {

        e.stopPropagation();

        dropdownMenu.classList.toggle("show");

    });

    document.addEventListener("click", function () {

        dropdownMenu.classList.remove("show");

    });

    dropdownMenu.addEventListener("click", function (e) {

        e.stopPropagation();

    });

}

/* =============================
   LOGOUT
============================= */

const logoutBtn = document.getElementById("logout");

if (logoutBtn) {

    logoutBtn.addEventListener("click", function (e) {

        e.preventDefault();

        localStorage.removeItem("currentUser");

        alert("Logged out successfully!");

        window.location.href = "index.html";

    });

}