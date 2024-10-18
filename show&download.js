// CÓDIGO PARA MOSTRAR ELEMENTO HTML Y VOLVERLO DESCARGABLE
const card = document.getElementById("tarjeta");
card.addEventListener("click", () => {
  const a = document.createElement("a");
  a.href = card.src;
  a.download = "Paloma_Robles.jpeg";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});

// MOSTRAR ELEMENTOS DESDE VISIBILITY HIDDEN Y OPACITY 0 AL HACER CLICK
const TIMEOUT_DELAY = 5000;

var lienzo = document.querySelector('.lienzo');
var tarjeta = document.querySelector('.tarjeta');
var timeoutId;

function showElements() {
    lienzo.style.opacity = '1';
    lienzo.style.visibility = 'visible';
    tarjeta.style.opacity = '1';
    tarjeta.style.visibility = 'visible';
}

function hideElements() {
    lienzo.style.opacity = '0';
    lienzo.style.visibility = 'hidden';
    tarjeta.style.opacity = '0';
    tarjeta.style.visibility = 'hidden';
}

document.querySelector('.fa-user').addEventListener('click', function() {
    showElements();
    timeoutId = setTimeout(hideElements, TIMEOUT_DELAY);
});

tarjeta.addEventListener('mouseover', function() {
    clearTimeout(timeoutId);
});

tarjeta.addEventListener('mouseout', function() {
    timeoutId = setTimeout(hideElements, TIMEOUT_DELAY);
});

// NUEVO: Ocultar elementos al hacer clic en el lienzo
lienzo.addEventListener('click', function() {
    hideElements();
});

// NUEVO: Prevenir la propagación del evento de clic en la tarjeta
tarjeta.addEventListener('click', function(event) {
    event.stopPropagation();
});


// MOSTRAR ELEMENTOS DESDE DISPLAY NONE
// var lienzo = document.querySelector('.lienzo');
// var tarjeta = document.querySelector('.tarjeta');
// var timeoutId;

// document.querySelector('.fa-user').addEventListener('click', function() {
//     lienzo.style.display = 'block';
//     tarjeta.style.display = 'block';

//     timeoutId = setTimeout(function() {
//         lienzo.style.display = 'none';
//         tarjeta.style.display = 'none';
//     }, 7000);
// });

// tarjeta.addEventListener('mouseover', function() {
//     clearTimeout(timeoutId);
// });

// tarjeta.addEventListener('mouseout', function() {
//     timeoutId = setTimeout(function() {
//         lienzo.style.display = 'none';
//         tarjeta.style.display = 'none';
//     }, 7000);
// });


// CÓDIGO PARA MAGNIFICAR ELEMENTO HTML Y VOLVERLO DESCARGABLE
// const img = document.getElementById("tarjeta");
// img.addEventListener("mouseover", () => {
//   img.style.transform = "scale(2.5) translate(-60px, 0px)";
// });
// img.addEventListener("mouseout", () => {
//   img.style.transform = "scale(1) translate(0px, 0px)";
// });
// img.addEventListener("click", () => {
//   const a = document.createElement("a");
//   a.href = img.src;
//   a.download = "Mauricio_Hernández.png";
//   document.body.appendChild(a);
//   a.click();
//   document.body.removeChild(a);
// });

