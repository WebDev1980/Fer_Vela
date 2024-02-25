window.onload = function() {
    var video = document.getElementById('myVideo1');

    var observer = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting === true) {
        setTimeout(function() {
            video.style.visibility = "visible"; // Hace visible el video
            video.style.opacity = "1"; // Aparece con suavidad
            video.currentTime = 0; // Comienza desde el segundo 0
            video.play();
        }, 7000); // n milliseconds = n seconds
    }
    }, { threshold: [0] });

    observer.observe(document.querySelector("#myDiv"));

    // Cuando el video está a punto de finalizar, comienza la transición suave
    video.addEventListener('timeupdate', function() {
    if (video.currentTime > video.duration - 3) { // Comienza la transición 3 segundos antes de que el video termine
        video.style.opacity = "0";
    }
    });

    // Cuando el video finaliza, vuelve a su estado original
    video.addEventListener('ended', function() {
    video.style.visibility = "hidden";
    });
};

function iniciarAnimacion(clase, imagenes) {
    return new Promise((resolve, reject) => {
        var elemento = document.querySelector('.' + clase);
        var indice = 0;

        // Controla la transición entre imágenes
        elemento.style.transition = "opacity 2s ease-in-out";

        function cambiarImagen() {
            // Desvanece la imagen actual
            elemento.style.opacity = 0;

            setTimeout(function() {
                // Cambia la imagen
                elemento.style.backgroundImage = "url('" + imagenes[indice] + "')";

                // Aparece la nueva imagen
                elemento.style.opacity = 1;

                // Avanza al siguiente paso de la animación
                indice++;

                // Si no se ha llegado al final de la lista de imágenes, programa el siguiente cambio
                if (indice < imagenes.length) {
                    setTimeout(cambiarImagen, 13000);
                } else {
                    // Después de mostrar la última imagen, espera un poco y luego haz que desaparezca
                    setTimeout(function() {
                        elemento.style.opacity = 0;
                        resolve(); // Resuelve la promesa cuando todas las imágenes se han mostrado
                    }, 13000);
                }
            }, 2000);
        }

        // Comienza la animación después de un retraso inicial
        setTimeout(cambiarImagen, 5000);
    });
}

function playVideos() {
    var videoId = 'myVideo'; // Asume que 'myVideo' es el ID de tu video
    var video = document.getElementById(videoId);
    
    video.style.visibility = "visible"; // Hace visible el video
    video.style.opacity = "1"; // Aparece con suavidad
    video.style.transition = "opacity 2s ease-in-out"; // Agrega una transición de opacidad
    video.currentTime = 0; // Asegura que el video comienza desde el segundo cero
    video.play();

    // Añade un controlador de eventos 'ended' para ocultar el video cuando termine
    video.onended = function() {
        var self = this; // Referencia al video
        self.style.opacity = "0"; // Desvanece el video

        // Espera a que la transición termine antes de hacer invisible el video
        setTimeout(function() {
            self.style.visibility = "hidden";
            // Reinicia las animaciones después de que el video se haya ocultado
            iniciarAnimaciones();
        }, 2000); // 2000ms es el tiempo de la transición
    };
}

// Función para iniciar las animaciones
function iniciarAnimaciones() {
    Promise.all([
        iniciarAnimacion('background2', ['images/img1.webp', 'images/img2.webp', 'images/img3.webp']),
        iniciarAnimacion('background3', ['images/image1.webp', 'images/image2.webp', 'images/image3.webp'])
    ]).then(playVideos); // Ejecuta playVideos() después de que todas las animaciones hayan terminado
}

// Inicia las animaciones
iniciarAnimaciones();