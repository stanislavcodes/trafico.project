/////////////////////// selectors
// mobile nav
const body = document.getElementById("body");
const headingBox = document.querySelector(".section-hero__heading-box");
const nav = document.querySelector(".nav");
const list = document.querySelector(".nav__list");
const hamburger = document.querySelector(".nav__hamburger");
// questions and answers
const questions = document.querySelectorAll(".question");
const questionBoxes = document.querySelectorAll(".question-box");
const questionIcons = document.querySelectorAll(".question__icon");
const answers = document.querySelectorAll(".answer");
const answerTexts = document.querySelectorAll(".answer__text");

/////////////////////// event listeners
// hamburger menu
hamburger.addEventListener("click", function (e) {
  navToggle(e);
});
// queastins and answers
for (let i = 0; i < questionIcons.length; i++) {
  questions[i].addEventListener("click", check(i));
}

/////////////////////// functions
// mobile nav open
function navToggle(e) {
  e.preventDefault();
  body.classList.toggle("open");
  hamburger.classList.toggle("open");
  nav.classList.toggle("open");
  list.classList.toggle("open");
  headingBox.classList.toggle("open");
}
// questions and answers logic
(function () {
  // open first answer when page is loaded'
  questionBoxes[0].classList.add("open");
  questionIcons[0].classList.add("open");
  questions[0].classList.add("open");
  answers[0].classList.add("open");
  answerTexts[0].classList.add("open");
  // // calculating height
  let answerHeight = window.getComputedStyle(answers[0]).height;
  questionBoxes[0].style.height = `calc(${answerHeight} + 11rem)`;
})();
// returns elements to their's default values
function defaultState() {
  for (i = 0; i < questions.length; i++) {
    answers[i].classList.add("closed");
    answers[i].classList.remove("open");

    questionIcons[i].classList.remove("open");
    questionBoxes[i].classList.remove("open");
    let questionHeight = window.getComputedStyle(questions[i]).height;
    questionBoxes[i].style.height = `${questionHeight}`;
    questions[i].classList.remove("open");
    answers[i].classList.remove("open");
    answerTexts[i].classList.remove("open");
  }
}
function fn(a) {
  defaultState();
  answers[a].classList.remove("closed");

  questionBoxes[a].classList.add("open");
  questionIcons[a].classList.add("open");
  questions[a].classList.add("open");
  answers[a].classList.add("open");
  answerTexts[a].classList.add("open");

  // // calculating height
  let answerHeight = window.getComputedStyle(answers[a]).height;
  questionBoxes[a].style.height = `calc(${answerHeight} + 11rem)`;
}
// check if the answer is closed or opened
function check(b) {
  questions[b].addEventListener("click", function () {
    if (answers[b].classList.contains("closed")) {
      fn(b);
    } else {
      defaultState();
    }
  });
}
