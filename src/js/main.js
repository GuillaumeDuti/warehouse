// effet nav ///////////////////////////////////////


var maNav           = document.querySelector('header');


window.addEventListener('scroll', function() {
    var monscrolltop    = window.pageYOffset;
    if (monscrolltop > 10) {
        maNav.classList.add("active");
    } else {
        maNav.classList.remove("active");
    }
})

// menu burger //////////////////////////////////////

var monMenuBurger   = document.querySelector('.menu--burger');
var monMenuDroite   = document.querySelector('nav ul');
var monMenuDroiteX  = document.querySelector('.menu--burger--close');

monMenuBurger.addEventListener('click', function() {
    monMenuDroite.classList.add("active");
})
monMenuDroiteX.addEventListener('click', function() {
    monMenuDroite.classList.remove("active");
})