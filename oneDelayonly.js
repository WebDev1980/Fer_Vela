document.addEventListener("DOMContentLoaded", function() {
    var bg2 = document.querySelector(".background2");
    bg2.addEventListener("animationend", function() {
        this.style.animation = "none";
    });
});
