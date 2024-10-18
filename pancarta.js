window.onload = function() {
  var encuesta = document.querySelector('.encuesta');
  var timeoutId;

  encuesta.addEventListener('click', function() {
    // Oculta el contenedor inmediatamente cuando se hace clic en él
    encuesta.style.left = '-105%';
    clearTimeout(timeoutId); // Cancela el temporizador de ocultación
  });

  setInterval(function() {
    // Muestra el contenedor
    encuesta.style.left = '0';
    timeoutId = setTimeout(function() {
      // Oculta el contenedor después de 7 segundos
      encuesta.style.left = '-105%';
    }, 10000);
  }, 40000); // Repite cada 30 segundos
};

