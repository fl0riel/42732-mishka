var burgerBtn = document.querySelector(".main-nav__toggle");
var mainNavs = document.querySelectorAll(".main-nav__block");

// mainNavs.forEach(function(mainNav){
//   mainNav.classList.add("main-nav__block--close");
// });

burgerBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  mainNavs.forEach(function(mainNav){
    mainNav.classList.toggle("main-nav__block--close");
  });
});

burgerBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  burgerBtn.classList.toggle("main-nav__toggle--open");
});
