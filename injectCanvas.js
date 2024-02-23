//  CÓDIGO PARA INYECTAR UN LIENZO TRANSLÜCIDO QUE ABARCA EL VIEWPORT CON ELEMENTO HTML CENTRADO AL HACER CLICK
// Obtener todas las imágenes
let images = document.querySelectorAll('img[src="images/Fher.webp"], img[src="images/fondo1.webp"], img[src="images/fondo2.webp"], img[src="images/Legislatura.svg"], img[src="images/contacto.webp"], img[src="images/Gallery1.webp"], img[src="images/Gallery2.webp"], img[src="images/Gallery3.webp"], img[src="images/Gallery4.webp"], img[src="images/Gallery5.webp"], img[src="images/Gallery6.webp"], img[src="images/Gallery7.webp"], img[src="images/Gallery8.webp"], img[src="images/Gallery9.webp"], img[src="images/Gallery10.webp"], img[src="images/Gallery11.webp"], img[src="images/Gallery12.webp"], img[src="images/Gallery13.webp"], img[src="images/Gallery14.webp"], img[src="images/Gallery15.webp"], img[src="images/Gallery16.webp"], img[src="images/Gallery17.webp"], img[src="images/Gallery18.webp"], img[src="images/Gallery19.webp"], img[src="images/Gallery20.webp"], img[src="images/Gallery21.webp"], img[src="images/Gallery22.webp"], img[src="images/Gallery01.webp"], img[src="images/Gallery02.webp"], img[src="images/Gallery03.webp"], img[src="images/Gallery04.webp"], img[src="images/Gallery05.webp"], img[src="images/Gallery06.webp"], img[src="images/Gallery07.webp"], img[src="images/Gallery08.webp"], img[src="images/Gallery09.webp"], img[src="images/Gallery010.webp"], img[src="images/Gallery011.webp"], img[src="images/Gallery012.webp"], img[src="images/Gallery013.webp"], img[src="images/Gallery014.webp"], img[src="images/Gallery015.webp"], img[src="images/Gallery016.webp"], img[src="images/Gallery017.webp"], img[src="images/Gallery018.webp"], img[src="images/Gallery019.webp"], img[src="images/Gallery020.webp"], img[src="images/Gallery021.webp"], img[src="images/Gallery022.webp"], img[src="images/Gallery023.webp"], img[src="images/Gallery024.webp"], img[src="images/Gallery025.webp"], img[src="images/Gallery026.webp"], img[src="images/Gallery027.webp"], img[src="images/Gallery028.webp"], img[src="images/Gallery029.webp"], img[src="images/Gallery030.webp"], img[src="images/Gallery031.webp"], img[src="images/Gallery032.webp"], img[src="images/Gallery033.webp"], img[src="images/Gallery034.webp"], img[src="images/Gallery035.webp"]');

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
