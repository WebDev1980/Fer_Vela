const elements = Array.from(document.querySelectorAll(".oculto2"));

function applyTransition(div) {
  div.style.transition = "opacity 2.5s ease-in-out";
  div.style.opacity = "1";
  div.classList.add("revealed"); // Marcar el elemento como revelado
}

window.addEventListener("scroll", () => {
  elements.forEach((div) => {
    if (!div.classList.contains("revealed")) { // Solo aplicar el efecto a los elementos no revelados
      const { top, bottom } = div.getBoundingClientRect();
      const { innerHeight } = window;
      if (top < innerHeight && bottom > 0) {
        applyTransition(div);
      }
    }
  });
});
