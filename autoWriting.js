$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

   // typing text animation script
var typed1;
var typed2;
var typed3;
var typed4;
var typed5;
var typed6;
var typed7;
$('.typing-1').waypoint(function() {
    if (!typed1) {
        typed1 = new Typed(".typing-1", {
            strings: ["Conóceme"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: false,
            startDelay: 14700,  // Agrega esta línea para un retraso de "n" segundos
            showCursor: false
        });
    }
}, { offset: '100%' });

$('.typing-2').waypoint(function() {
    if (!typed2) {
        typed2 = new Typed(".typing-2", {
            strings: ["Hola, soy"],
            typeSpeed: 50,
            backSpeed: 30,
            loop: false,
            showCursor: false,
            startDelay: 7000,  // Agrega esta línea para un retraso de "n" segundos
            onComplete: function(self) { $(self.cursor).hide(); }
        });
    }
}, { offset: '100%' });

$('.typing-3').waypoint(function() {
    if (!typed3) {
        typed3 = new Typed(".typing-3", {
            strings: ["Mauricio Hernández"],
            typeSpeed: 40,
            backSpeed: 20,
            loop: false,
            showCursor: false,
            startDelay: 9000,  // Agrega esta línea para un retraso de "n" segundos
            onComplete: function(self) { $(self.cursor).hide(); }
        });
    }
}, { offset: '100%' });

$('.typing-4').waypoint(function() {
    if (!typed4) {
        typed4 = new Typed(".typing-4", {
            strings: ["Aspiro a la Coordinación en defensa de la 4T"],
            typeSpeed: 20,
            backSpeed: 10,
            loop: false,
            showCursor: false,
            startDelay: 11000,  // Agrega esta línea para un retraso de "n" segundos
            onComplete: function(self) { $(self.cursor).hide(); }
        });
    }
}, { offset: '100%' });

$('.typing-5').waypoint(function() {
    if (!typed5) {
        typed5 = new Typed(".typing-5", {
            strings: ["en Silao de la Victoria"],
            typeSpeed: 30,
            backSpeed: 15,
            loop: false,
            showCursor: false,
            startDelay: 13500,  // Agrega esta línea para un retraso de "n" segundos
            onComplete: function(self) { $(self.cursor).hide(); }
        });
    }
}, { offset: '100%' });

$('.typing-6').waypoint(function() {
    if (!typed6) {
        typed6 = new Typed(".typing-6", {
            strings: ["Mauricio Hernández"],
            typeSpeed: 50,
            backSpeed: 30,
            loop: false,
            onComplete: function(self) { $(self.cursor).hide(); }
        });
    }
}, { offset: '100%' });

$('.typing-7').waypoint(function() {
    if (!typed7) {
        typed7 = new Typed(".typing-7", {
            strings: ["a la Coordinación en defensa de la 4T"],
            typeSpeed: 30,
            backSpeed: 10,
            loop: false,
            onComplete: function(self) { $(self.cursor).hide(); }
        });
    }
}, { offset: '100%' });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
