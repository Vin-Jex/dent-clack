const toggle = document.querySelector(".toggle");
const nav = document.querySelector(".header-main");
let navLinks = document.querySelectorAll(".link")
// const linkContainer = document.querySelector(".links")

/* Toggle Nav */
toggle.addEventListener('click', () => {
  toggle.classList.toggle("show-nav");
  nav.classList.toggle("show-nav")
});