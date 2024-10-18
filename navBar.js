// CÓDIGO PARA CONTROLAR COMPORTAMIEMTO DE BARRA DE NAVEGACIÓN (OCULTAR Y APARECER)
const SHOW_DELAY = 100;
const HIDE_DELAY = 0;

var prevScrollpos = window.scrollY;
var hideTimer; // variable para guardar el temporizador de ocultar
var showTimer; // variable para guardar el temporizador de mostrar
var isTouching = false; // variable para saber si el usuario está tocando la pantalla o no
var startTime; // variable para guardar el tiempo inicial del scroll
var endTime; // variable para guardar el tiempo final del scroll
var navbar = document.getElementById("navbar");

function showNavbar() {
    navbar.style.top = "0";
}

function hideNavbar() {
    navbar.style.top = "-100px";
}

window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    if (hideTimer) {
      clearTimeout(hideTimer);
      hideTimer = null;
    }
    if (!isTouching) {
      showTimer = setTimeout(showNavbar, SHOW_DELAY);
    }
  } else {
    if (showTimer) {
      clearTimeout(showTimer);
      showTimer = null;
    }
    startTime = new Date().getTime();
    if (!isTouching) {
      hideTimer = setTimeout(function(){
        endTime = new Date().getTime();
        var duration = endTime - startTime;
        if (duration >= HIDE_DELAY) {
          hideNavbar();
        }
        hideTimer = null;
      }, HIDE_DELAY);
    }
  }
  prevScrollpos = currentScrollPos;
}

window.addEventListener("touchstart", function() {
  isTouching = true;
  if (hideTimer) {
    clearTimeout(hideTimer);
    hideTimer = null;
  }
  if (showTimer) {
    clearTimeout(showTimer);
    showTimer = null;
  }
});

window.addEventListener("touchend", function() {
  isTouching = false;
});

