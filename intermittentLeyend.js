// Crear el elemento de la leyenda (inyectar elemento)
// var leyenda = document.createElement('div');
// leyenda.style.position = 'absolute';
// leyenda.style.fontFamily = 'Poppins, sans-serif';
// leyenda.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
// leyenda.style.fontSize = '.75vw';
// leyenda.style.color = 'white';
// leyenda.style.Top = '0px';
// leyenda.style.Left = '0px';
// leyenda.style.border = '2px solid crimson';
// leyenda.style.borderRadius = '10px';
// leyenda.style.padding = '0 5px'
// leyenda.textContent = 'Haz click o toca aquí';
// leyenda.id = 'leyenda';

// Agregar la leyenda al DOM
// document.querySelector('.row-card').appendChild(leyenda);

var leyendas = document.querySelectorAll('.leyenda');
var iconos = document.querySelectorAll('.icon_control');
var timers = [];

// Definir la animación de parpadeo
var style = document.createElement('style');
style.innerHTML = `
  @keyframes blink {
    0% {opacity: 1;}
    50% {opacity: 0;}
    100% {opacity: 1;}
  }
  .leyenda {
    animation: blink 1.3s linear infinite;
  }
`;
document.head.appendChild(style);

var observer = new IntersectionObserver(function(entries) {
    // Si el icono es visible en el viewport
    if(entries[0].isIntersecting === true) {
        // Mostrar la leyenda con un retraso de "n" segundos
        timer = setTimeout(function() {
            leyendas.forEach(function(leyenda) {
                leyenda.style.display = 'block';
                // Iniciar la animación de parpadeo
                leyenda.style.animation = 'blink 1.3s linear infinite';
            });
            // Ocultar la leyenda después de 7 segundos
            setTimeout(function() {
                leyendas.forEach(function(leyenda) {
                    leyenda.style.display = 'none';
                    // Detener la animación de parpadeo
                    leyenda.style.animation = '';
                });
            }, 3300);
        }, 2500);
    } else {
        // Ocultar la leyenda
        clearTimeout(timer);
        leyendas.forEach(function(leyenda) {
            leyenda.style.display = 'none';
            // Detener la animación de parpadeo
            leyenda.style.animation = '';
        });
    }
}, { threshold: [0] });

// Observar todos los iconos
iconos.forEach(function(icono) {
    observer.observe(icono);
    // Ocultar la leyenda cuando se da click en el icono o en la leyenda
    icono.addEventListener('click', function() {
        leyendas.forEach(function(leyenda) {
            leyenda.style.display = 'none';
        });
    });
    // Mostrar la leyenda cuando el cursor pasa por encima del icono
    icono.addEventListener('mouseover', function() {
        leyendas.forEach(function(leyenda) {
            leyenda.style.display = 'block';
        });
    });
    // Ocultar la leyenda cuando el cursor se retira del icono
    icono.addEventListener('mouseout', function() {
        leyendas.forEach(function(leyenda) {
            leyenda.style.display = 'none';
        });
    });
});

leyendas.forEach(function(leyenda) {
    leyenda.addEventListener('click', function() {
        leyenda.style.display = 'none';
    });
});
