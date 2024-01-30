document.querySelectorAll('.btn_container .docto').forEach((btn, index) => {
    // Asegúrate de que 'show-before' se aplique al cargar la página
    btn.classList.add('show-before');

    btn.addEventListener('click', () => {
        const pdf = document.querySelectorAll('.pdf-embed')[index];
        const contenedor = document.querySelectorAll('.contenedor')[index];
        if (contenedor.classList.contains('visible')) {
            pdf.classList.remove('mostrar');
            setTimeout(() => {
                contenedor.classList.remove('visible');
                btn.classList.remove('show-after');
                btn.classList.add('show-before');
            }, 1300); // Aumenta el retraso a 1300ms
        } else {
            btn.classList.remove('show-before');
            btn.classList.add('show-after');
            contenedor.classList.add('visible');
            setTimeout(() => {
                pdf.classList.add('mostrar');
            }, 500); 
        }
    });
});

