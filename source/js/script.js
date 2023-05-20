let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav');
let menuLinks = menu.querySelectorAll('.nav__link');
let header = document.querySelector('.header');

// когда JS есть, .js-on прячет бургер-меню
header.classList.add('header--js-on');
menu.classList.add('nav--js-on');
burger.classList.remove('visually-hidden');

burger.addEventListener('click', function () {
  menu.classList.toggle('nav--active');
  burger.classList.toggle('burger--active');
});

menuLinks.forEach(function (el) {
  el.addEventListener('click', function (event) {
    menu.classList.remove('nav--active');
    burger.classList.remove('burger--active');
  })
});
