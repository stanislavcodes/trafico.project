// mobile nav
const headingPrimary = document.querySelector('.heading-primary');
const nav = document.querySelector(".nav");
const list = document.querySelector(".nav__list");
const hamburger = document.querySelector(".nav__hamburger");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("open");
  nav.classList.toggle("open");
  list.classList.toggle("open");
  headingPrimary.classList.toggle("open");
  console.log("ok");
});
