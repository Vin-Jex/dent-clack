/** @format */

const toggle = document.querySelector(".toggle");
const nav = document.querySelector(".nav-main");
let lists = document.querySelectorAll(".navlinks");

// const linkContainer = document.querySelector(".links")

/* Toggle Nav */
toggle.addEventListener("click", () => {
  toggle.classList.toggle("show-nav");
  nav.classList.toggle("show-nav");
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
    lists.forEach((link) => link.classList.remove("active"));
    element.target.classList.add("active");
  });
});

/*  Target button 
    Give it a single name on small screen
   */

window.addEventListener("DOMContentLoaded", () => {
  const screenWidth = window.innerWidth;
  const appointment = document.querySelector("#appointment");
  const play = document.querySelector("#play");
  if (screenWidth <= 784) {
    appointment.innerHTML = "Book";
    let icon = document.createElement("span");
    icon.classList.add("material-symbols-outlined");
    const iconName = document.createTextNode("add");
    icon.appendChild(iconName);
    appointment.append(icon);
  }
});


/* Static Nav bar */
const header = document.querySelector('#header');
const sticky = header.offsetTop;;


window.onscroll = () => {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky")
  } else {
    header.classList.remove("sticky")
  }
}
