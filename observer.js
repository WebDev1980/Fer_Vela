// Selecciona todas las imágenes ocultas y los párrafos
const hiddenImages = document.querySelectorAll('.hidden-image');
const parrafos = document.querySelectorAll('.right p');

// Configura el observador de intersección
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // El elemento está en la pantalla, muestra suavemente
            entry.target.style.opacity = '1';
        }
    });
}, { threshold: 0.5 }); // Cambia el umbral según tus necesidades

// Observa cada imagen oculta y cada párrafo
hiddenImages.forEach((image) => {
    observer.observe(image);
});

parrafos.forEach((parrafo) => {
    observer.observe(parrafo);
});
