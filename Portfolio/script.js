document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.querySelector(".nav-links");

    menuIcon.addEventListener("click", function () {
        // Toggle the 'active' class on the navbar
        navLinks.classList.toggle("active");

        // Change the menu icon between ☰ (menu) and ✖ (close)
        if (navLinks.classList.contains("active")) {
            menuIcon.classList.replace("bx-menu", "bx-x"); // Change to 'X'
        } else {
            menuIcon.classList.replace("bx-x", "bx-menu"); // Change back to '☰'
        }
    });
});
