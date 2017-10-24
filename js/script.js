var burgerBtn = document.querySelector(".main-nav__toggle");
var mainNavs = document.querySelectorAll(".main-nav__block");
var modalShowBtn = document.querySelectorAll(".button-modal");
var modalShow = document.querySelector(".modal");
var modalOverlay = document.querySelector(".modal__overlay");
var pageHeader = document.querySelector(".page-header");

pageHeader.classList.add("page-header--js");

(function () { // IE NodeList Polyfill //
  if ( typeof NodeList.prototype.forEach === "function" ) return false;
  NodeList.prototype.forEach = Array.prototype.forEach;
})();

mainNavs.forEach(function(mainNav){
  mainNav.classList.add("main-nav__block--close");
});

burgerBtn.addEventListener("click", function(evt) {
  mainNavs.forEach(function(mainNav){
    mainNav.classList.toggle("main-nav__block--close");
  });
  burgerBtn.classList.toggle("main-nav__toggle--close");
});

modalShowBtn.forEach(function(button) {
  button.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalShow.classList.add("modal--show");
  });
});

if (modalOverlay) {
  modalOverlay.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalShow.classList.remove("modal--show");
  });
}
