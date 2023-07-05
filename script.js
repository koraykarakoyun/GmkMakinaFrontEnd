function bounceInLeft() {
    var reveals = document.querySelectorAll(".bounceInLeft");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("animate__animated");
            reveals[i].classList.add("animate__bounceInLeft");
        } else {
            reveals[i].classList.remove("animate__animated");
            reveals[i].classList.remove("animate__bounceInLeft");
        }
    }
}

function fade_in_down() {
    var reveals = document.querySelectorAll(".fade_in_down");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 50;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("animate__animated");
            reveals[i].classList.add("animate__fadeInDown");
            reveals[i].classList.add("animate__slow");

        } else {
            reveals[i].classList.remove("animate__animated");
            reveals[i].classList.remove("animate__fadeInDown");
            reveals[i].classList.add("animate__slow");
        }
    }
}

function animate_tada() {
    var reveals = document.querySelectorAll(".animate_tada");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 400;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("animate__animated");
            reveals[i].classList.add("animate__tada");
        } else {
            reveals[i].classList.remove("animate__animated");
            reveals[i].classList.remove("animate__tada");
        }
    }
}


window.addEventListener("scroll", bounceInLeft);
window.addEventListener("scroll", fade_in_down);
window.addEventListener("scroll", animate_tada);