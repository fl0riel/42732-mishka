var burgerBtn = document.querySelector(".main-nav__toggle");
var mainNav = document.querySelector(".main-nav__wrapper");

mainNav.classList.add("main-nav__wrapper--close");

burgerBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  mainNav.classList.toggle("main-nav__wrapper--close");
});

burgerBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  burgerBtn.classList.toggle("main-nav__toggle--open");
});