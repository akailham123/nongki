let navMenuToggle = document.getElementById("navMenuToggle");
let navMenu = document.getElementById("navMenu");
let hamburger = document.getElementById("hamburger");
let profile = document.getElementById("profile");

profile.addEventListener("click", () => {
    navMenuToggle.classList.toggle("active");
    console.log("trigger")
})