let hamburger = document.querySelector('.hamburger-icon');
let menu = document.querySelector('.menu-mobile');
let close = document.querySelector('.close-icon');

hamburger.addEventListener('click', function() {
  menu.classList.remove('hide');
  hamburger.classList.add('hide');
  close.classList.remove('hide');
});

close.addEventListener('click', function() {
  menu.classList.add('hide');
  hamburger.classList.remove('hide');
  close.classList.add('hide');
});
