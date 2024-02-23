window.onload = function() {
    setTimeout(function() {
        var video = document.getElementById('myVideo');
        video.style.display = "block";
        video.currentTime = 0; // Asegura que el video comienza desde el segundo cero
        video.play();
    }, 11000); // n milliseconds = n seconds

    var observer = new IntersectionObserver(function(entries) {
        if(entries[0].isIntersecting === true) {
            setTimeout(function() {
                var video = document.getElementById('myVideo1');
                video.style.display = "block";
                video.style.opacity = "1"; // Aparece con suavidad
                video.currentTime = 0; // Comienza desde el segundo 0
                video.play();
            }, 7000); // n milliseconds = n seconds
        }
    }, { threshold: [0] });

    observer.observe(document.querySelector("#myDiv"));
};


