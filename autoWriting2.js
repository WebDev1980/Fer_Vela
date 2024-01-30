const ids = ["escritura1", "escritura2", "escritura3", "escritura4"];
const ESCRITURA_DISPLAY_TIME = 5500;
const INTERVAL_TIME = 40;
const RESIZE_TIMEOUT = 200;
let i = 0;

function cambiarColor(escritura1, escritura3) {
    if (window.innerWidth >= 640 && window.innerWidth <= 2024 && window.innerWidth !== 810 && window.innerHeight !== 1080 && window.innerWidth !== 800 && window.innerHeight !== 1280) {
        escritura1.style.color = "crimson";
        escritura3.style.color = "crimson";
    } else {
        escritura1.style.color = "";
        escritura3.style.color = "";
    }
}

function animarEscritura(id) {
    const escritura = document.getElementById(id);
    const texto = escritura.textContent;
    escritura.textContent = "";
    escritura.classList.remove("oculto");

    const escritura1 = document.getElementById("escritura1");
    const escritura3 = document.getElementById("escritura3");

    let resizeTimeout;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => cambiarColor(escritura1, escritura3), RESIZE_TIMEOUT);
    });

    cambiarColor(escritura1, escritura3); // Llamamos a la función para que se ejecute al cargar la página

    let j = 0;
    const intervalID = setInterval(function() {
        if (j < texto.length) {
            escritura.textContent += texto.charAt(j);
            j++;
        } else {
            clearInterval(intervalID);
            i++;
            if (i < ids.length) {
                setTimeout(function() {
                    animarEscritura(ids[i]);
                }, 400);
            }
        }
    }, INTERVAL_TIME);
}

setTimeout(function() {
    animarEscritura(ids[i]);
}, ESCRITURA_DISPLAY_TIME);





// Código para aparecer suavemente un elemento html al estar en el viewport (usando un ID)
// const img = document.getElementById("myimage");
// window.addEventListener("scroll", () => {
//   const { top, bottom } = img.getBoundingClientRect();
//   const { innerHeight } = window;
//   if (top < innerHeight && bottom > 0) {
//     img.style.transition = "opacity 3s ease-in-out";
//     img.style.opacity = "1";
//   }
// });

// Código para aparecer suavemente un elemento html al estar en el viewport y desaparezca fuera del viewport (usando un ID)
// const img = document.getElementById("myimage");
// window.addEventListener("scroll", () => {
//   const { top, bottom } = img.getBoundingClientRect();
//   const { innerHeight } = window;
//   if (top < innerHeight && bottom > 0) {
//     img.style.transition = "opacity 3s ease-in-out";
//     img.style.opacity = "1";
//   } else {
//     img.style.transition = "opacity 3s ease-in-out";
//     img.style.opacity = "0";
//   }
// });

// Código para aparecer suavemente un elemento html al estar en el viewport y desaparezca fuera del viewport (usando una)
// const images = document.querySelectorAll(".aparecer");
// window.addEventListener("scroll", () => {
//   images.forEach((img) => {
//     const { top, bottom } = img.getBoundingClientRect();
//     const { innerHeight } = window;
//     if (top < innerHeight && bottom > 0) {
//       img.style.transition = "opacity 3s ease-in-out";
//       img.style.opacity = "1";
//     } else {
//       img.style.transition = "opacity 3s ease-in-out";
//       img.style.opacity = "0";
//     }
//   });
// });

