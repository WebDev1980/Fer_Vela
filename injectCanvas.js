//  CÓDIGO PARA INYECTAR UN LIENZO TRANSLÜCIDO QUE ABARCA EL VIEWPORT CON ELEMENTO HTML CENTRADO AL HACER CLICK
// Obtener todas las imágenes
let images = document.querySelectorAll('img[src="images/Paloma.jpeg"], img[src="images/fondo1.jpg"], img[src="images/fondo2.jpg"], img[src="images/4Tmod.svg"], img[src="images/Pueblo-mod.svg"], img[src="images/Gallery1.jpeg"], img[src="images/Gallery2.jpg"], img[src="images/Gallery3.jpg"], img[src="images/Gallery4.jpg"], img[src="images/Gallery5.jpg"], img[src="images/Gallery6.jpg"], img[src="images/Gallery7.jpg"], img[src="images/Gallery8.jpg"], img[src="images/Gallery9.jpg"], img[src="images/Gallery10.jpg"], img[src="images/Gallery11.jpg"], img[src="images/Gallery12.jpg"], img[src="images/Gallery13.jpg"], img[src="images/Gallery14.jpg"], img[src="images/Gallery15.jpg"], img[src="images/Gallery16.jpg"], img[src="images/Gallery17.jpg"], img[src="images/Gallery18.jpg"], img[src="images/Gallery19.jpg"], img[src="images/Gallery20.jpg"], img[src="images/Gallery21.jpg"], img[src="images/Gallery22.jpg"], img[src="images/Gallery01.jpeg"], img[src="images/Gallery02.jpg"], img[src="images/Gallery03.jpg"], img[src="images/Gallery04.jpg"], img[src="images/Gallery05.jpg"], img[src="images/Gallery06.jpg"], img[src="images/Gallery07.jpg"], img[src="images/Gallery08.jpg"], img[src="images/Gallery09.jpg"], img[src="images/Gallery010.jpg"], img[src="images/Gallery011.jpg"], img[src="images/Gallery012.jpg"], img[src="images/Gallery013.jpg"], img[src="images/Gallery014.jpeg"], img[src="images/Gallery015.jpg"], img[src="images/Gallery016.jpg"], img[src="images/Gallery017.jpg"], img[src="images/Gallery018.jpg"], img[src="images/Gallery019.jpg"], img[src="images/Gallery020.jpg"], img[src="images/Gallery021.jpg"], img[src="images/Gallery022.jpg"], img[src="images/Gallery023.jpg"], img[src="images/Gallery024.jpg"], img[src="images/Gallery025.jpg"], img[src="images/Gallery026.jpg"], img[src="images/Gallery027.jpg"], img[src="images/Gallery028.jpg"], img[src="images/Gallery029.jpg"], img[src="images/Gallery030.jpg"], img[src="images/Gallery031.jpg"], img[src="images/Gallery032.jpg"], img[src="images/Gallery033.jpg"], img[src="images/Gallery034.jpg"], img[src="images/Gallery035.jpg"]');

// Crear el lienzo negro translúcido
let overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100vw';
overlay.style.height = '100vh';
overlay.style.background = 'rgba(0, 0, 0, .93)';
overlay.style.display = 'flex';
overlay.style.justifyContent = 'center';
overlay.style.alignItems = 'center';
overlay.style.visibility = 'hidden';
overlay.style.zIndex = '1000'; // Asegurarse de que el lienzo esté encima de otros elementos
overlay.style.transition = 'visibility 0.5s, opacity 0.5s linear'; // Suavizar la aparición y desaparición
overlay.style.opacity = '0';

// Crear una nueva imagen para mostrar en el lienzo
let overlayImg = new Image();
overlayImg.style.maxWidth = '95%'; // Controlar el tamaño de la imagen
overlayImg.style.maxHeight = '95%'; // Controlar el tamaño de la imagen

// Ajustar el tamaño de la imagen en función del ancho del viewport
window.addEventListener('resize', function() {
    if (window.innerWidth < 600) {
        overlayImg.style.maxWidth = '85%';
        overlayImg.style.maxHeight = '85%';
    } else {
        overlayImg.style.maxWidth = '95%';
        overlayImg.style.maxHeight = '95%';
    }
});

// Agregar la imagen al lienzo
overlay.appendChild(overlayImg);

// Agregar el lienzo al cuerpo del documento
document.body.appendChild(overlay);

// Función para ocultar el lienzo
function hideOverlay() {
    overlay.style.visibility = 'hidden';
    overlay.style.opacity = '0';
}

// Función para aplicar la transición de aparición suave
function applyTransition(img) {
    img.style.transition = "opacity 2.5s ease-in-out";
    img.style.opacity = "1";
    img.classList.add("revealed"); // Marcar la imagen como revelada
}

// Mostrar el lienzo y aplicar la transición de aparición suave cuando se haga click en la imagen
images.forEach(function(img) {
    img.style.cursor = 'pointer'; // Cambiar el cursor a pointer cuando pase sobre la imagen
    img.addEventListener('click', function() {
        overlayImg.src = img.src;
        overlayImg.alt = img.alt || 'Imagen'; // Agregar texto alternativo
        overlay.style.visibility = 'visible';
        overlay.style.opacity = '1';
        applyTransition(img);
        // Ocultar el lienzo después de "n" segundos
        setTimeout(hideOverlay, 7000);
    });
});

// Ocultar el lienzo cuando se haga clic en él
overlay.addEventListener('click', hideOverlay);

// CÓDIGO PARA EFECTO DE APARICIÓN SUAVE DE ELEMENTOS HTML - OPACITY 0 A 1
window.addEventListener("load", () => {
    images.forEach((img) => {
        const { top, bottom } = img.getBoundingClientRect();
        const { innerHeight } = window;
        if (top < innerHeight && bottom > 0) {
            applyTransition(img);
        }
    });
});

window.addEventListener("scroll", () => {
    images.forEach((img) => {
        const { top, bottom } = img.getBoundingClientRect();
        const { innerHeight } = window;
        if (top < innerHeight && bottom > 0) {
            applyTransition(img);
        }
    });
});
