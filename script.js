const toggle = document.querySelector(".toggle");
const nav = document.querySelector(".nav-main");
let lists = document.querySelectorAll(".navlinks");

// const linkContainer = document.querySelector(".links")

/* Toggle Nav */
toggle.addEventListener('click', () => {
  toggle.classList.toggle("show-nav");
  nav.classList.toggle("show-nav")
});

// lists.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     lists.forEach(Element => {
//       Element.classList.remove("active")
//       console.log("yo");
//     })
//     e.target.classList.add("active")
//   })
// })

lists.forEach((btn) => {
  btn.addEventListener("click", (element) => {
    lists.forEach(link => link.classList.remove("active"));
    element.target.classList.add("active")
  })
})
