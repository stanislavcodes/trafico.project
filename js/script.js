/////////////////////// selectors
// mobile nav
const body = document.getElementById("body");
const headingBox = document.querySelector(".section-hero__heading-box");
const nav = document.querySelector(".nav");
const list = document.querySelector(".nav__list");
const links = document.querySelectorAll(".nav_link");
const hamburger = document.querySelector(".nav__hamburger");
// questions and answers
const questions = document.querySelectorAll(".question");
const questionBoxes = document.querySelectorAll(".question-box");
const answers = document.querySelectorAll(".answer");
/////////////////////// event listeners
// hamburger menu
hamburger.addEventListener("click", function (e) {
  navToggle(e);
});

for (i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    if (nav.classList.contains("open")) {
      console.log('heeehhhhhee');
      hamburger.classList.remove("open");
      nav.classList.remove("open");
      list.classList.remove("open");
      headingBox.classList.remove("open");
    }
  });
}
// questions and answers
for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", check(i));
}
/////////////////////// functions
// smooth scrolling
var scroll = new SmoothScroll('.logo a[href*="#"]', {
  speed: 600,
});
var scroll = new SmoothScroll('.nav a[href*="#"]', {
  speed: 600,
});
var scroll = new SmoothScroll('.navigation-box a[href*="#"]', {
  speed: 600,
});
var easeOutQuart = new SmoothScroll('[data-easing="linear"]', {
  easing: "linear",
});
// mobile nav open
function navToggle(e) {
  // e.preventDefault();
  // body.classList.toggle("open");
  hamburger.classList.toggle("open");
  nav.classList.toggle("open");
  list.classList.toggle("open");
  // headingBox.classList.toggle("open");
}
// questions and answers
function calcAnswerHeight(par) {
  let d = par;
  let questionHeight = window.getComputedStyle(questions[d]).height;
  let answerHeight = window.getComputedStyle(answers[d]).height;
  questionBoxes[d].style.height = `calc(${questionHeight} + ${answerHeight})`;
}
//questions and answers logic
(function (a) {
  // open first answer when page is loaded'
  for (i = 0; i < questionBoxes.length; i++) {
    questionBoxes[i].classList.add("closed");
  }
  questionBoxes[a].classList.remove("closed");
  questionBoxes[a].classList.add("open");
  questions[a].classList.add("open");
  // // calculating height
  calcAnswerHeight(a);
})(0);
//returns elements to their's default values
function defaultState() {
  for (i = 0; i < questions.length; i++) {
    questionBoxes[i].classList.add("closed");
    questionBoxes[i].classList.remove("open");
    let questionHeight = window.getComputedStyle(questions[i]).height;
    questionBoxes[i].style.height = `${questionHeight}`;
    questions[i].classList.remove("open");
    questionBoxes[i].classList.remove("open");
  }
}
function fn(a) {
  defaultState();
  questionBoxes[a].classList.remove("closed");
  questionBoxes[a].classList.add("open");
  questions[a].classList.add("open");
  calcAnswerHeight(a);
}
// check if the answer is closed or opened
function check(b) {
  questions[b].addEventListener("click", function () {
    if (questionBoxes[b].classList.contains("closed")) {
      fn(b);
    } else {
      defaultState();
    }
  });
}
// slick slider
$(document).ready(function () {
  $(".testimonials").slick({
    // autoplay: true,
    // autoplaySpeed: 5000,
    pauseOnHover: false,
    infinite: false,
    speed: 1000,
    // easing: 'ease-in-out',
    slidesToShow: 2,
    slidesToScroll: 2,
    variableWidth: true,
    prevArrow: $(".section-testimonials__arrow--left"),
    nextArrow: $(".section-testimonials__arrow--right"),
    responsive: [
      {
        breakpoint: 802,
        settings: {
          centerMode: true,
          centerPadding: "40px",
          // slidesToShow: 2,
          initialSlide: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 703,
        settings: {
          autoplay: true,
          autoplaySpeed: 5000,
          centerMode: true,
          centerPadding: "0px",
          // slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          autoplay: true,
          autoplaySpeed: 5000,
          centerMode: true,
          centerPadding: "20px",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  // $(".testimonials").slick('unslick');
});
