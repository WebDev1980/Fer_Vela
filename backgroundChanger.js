let boxes = document.querySelectorAll('.serv-content .card');

// Añadir transición suave a las cajas
boxes.forEach(box => {
    box.style.transition = 'background 1s, transform 1s';
});

// Agregar los eventos de hover a las cajas solo si no es una pantalla táctil
if (!('ontouchstart' in window)) {
    boxes.forEach(box => {
        box.addEventListener('mouseover', function() {
            this.style.background = 'crimson';
            this.style.transform = 'scale(1.07)';
            let icon = this.querySelector('.change');
            if (icon) {
                icon.style.color = 'white';
            }
        });
        box.addEventListener('mouseout', function() {
            this.style.background = '';
            this.style.transform = '';
            let icon = this.querySelector('.change');
            if (icon) {
                icon.style.color = 'crimson';
            }
        });
    });
} else {
    let index = 0;
    let intervalId;
    let firstStart = true;

    function changeBackground() {
        // Remover el color de fondo de todas las cajas e iconos
        boxes.forEach(box => {
            box.style.background = '';
            box.style.transform = '';
            let icon = box.querySelector('.change');
            if (icon) {
                icon.style.color = '';
            }
        });

        // Añadir el color de fondo a la caja actual y cambiar el color del icono a blanco
        boxes[index].style.background = 'crimson';
        boxes[index].style.transform = 'scale(1.07)';
        let icon = boxes[index].querySelector('.change');
        if (icon) {
            icon.style.color = 'white';
        }

        // Incrementar el índice
        index = (index + 1) % boxes.length;
    }

    function startChange() {
        // Reiniciar el índice
        index = 0;
        // Iniciar el intervalo con un retraso de "n" segundos si es la primera vez
        if (firstStart) {
            setTimeout(() => {
                intervalId = setInterval(changeBackground, 2000);
                firstStart = false;
            }, 2000);
        } else {
            intervalId = setInterval(changeBackground, 2000);
        }
    }

    function stopChange() {
        // Detener el intervalo
        clearInterval(intervalId);
        // Remover el color de fondo de todas las cajas e iconos
        boxes.forEach(box => {
            box.style.background = '';
            box.style.transform = '';
            let icon = box.querySelector('.change');
            if (icon) {
                icon.style.color = 'crimson';
            }
        });
    }

    function isInViewport(element) {
        let bounding = element.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    window.addEventListener('scroll', function() {
        // Si el primer elemento está en el viewport
        if (isInViewport(boxes[0])) {
            // Iniciar el cambio de color de fondo
            startChange();
            // Remover el evento de scroll
            window.removeEventListener('scroll', arguments.callee);
        }
    });
}
