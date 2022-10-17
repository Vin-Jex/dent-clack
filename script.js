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
const header = document.querySelector("#header");
const sticky = header.offsetTop;

window.onscroll = () => {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

/* Swiper js function */
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  speed: 500,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 3,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});

/* Swiper js function */
const swiper2 = new Swiper(".testimonials", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  speed: 500,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  breakpoints: {
    640: {
      spaceBetween: 40,
    },
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});
