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

