/////////////////////// selectors
// mobile nav
const body = document.getElementById("body");
const headingBox = document.querySelector(".section-hero__heading-box");
const nav = document.querySelector(".nav");
const list = document.querySelector(".nav__list");
const hamburger = document.querySelector(".nav__hamburger");

/////////////////////// event listeners

hamburger.addEventListener("click", function (e) {
  navToggle(e);
});

/////////////////////// functions

function navToggle(e) {
  e.preventDefault();
  body.classList.toggle("open");
  hamburger.classList.toggle("open");
  nav.classList.toggle("open");
  list.classList.toggle("open");
  headingBox.classList.toggle("open");
}
