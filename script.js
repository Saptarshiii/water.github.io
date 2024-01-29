// You can add JavaScript code here if needed
// For a simple static website, this file may be empty
document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementById("header");
    var navbar = document.getElementById("navbar");

    header.addEventListener("click", function () {
        // Toggle the contracted class on tap
        header.classList.toggle("header-contracted");
        navbar.classList.toggle("header-contracted");
    });
});
