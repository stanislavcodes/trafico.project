// mobile nav
const body = document.getElementById("body");
const headingBox = document.querySelector(".section-hero__heading-box");
const nav = document.querySelector(".nav");
const list = document.querySelector(".nav__list");
const hamburger = document.querySelector(".nav__hamburger");

// let navHeight = window.getComputedStyle(nav).height;


hamburger.addEventListener("click", function (e) {
  e.preventDefault();
  body.classList.toggle("open");
  hamburger.classList.toggle("open");
  nav.classList.toggle("open");
  list.classList.toggle("open");
  headingBox.classList.toggle("open");
});

  // console.log("before: " + window.getComputedStyle(headingBox).padding);
  // headingBox.style.padding = `calc(13.5vh + ${navHeight}) 2.5rem 0 2.5rem;`;
  // console.log("after: " + window.getComputedStyle(headingBox).padding);