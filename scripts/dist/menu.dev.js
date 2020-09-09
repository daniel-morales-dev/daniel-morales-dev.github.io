"use strict";

var menuToggle = document.querySelector('.menu-toggle');
var menuToggleIcon = document.querySelector('.menu-toggle i');
var menu = document.getElementById('menu');
menuToggle.addEventListener('click', function (e) {
  menu.classList.toggle('show');

  if (menu.classList.contains('show')) {
    menuToggleIcon.setAttribute('class', 'fa fa-times');
  } else {
    menuToggleIcon.setAttribute('class', 'fa fa-bars');
  }
});