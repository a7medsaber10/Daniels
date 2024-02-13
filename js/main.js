// Typed JS
var typed = new Typed("#typed_animation", {
    strings: ["Developer", "Designer", "Larry Daniels"],
    typeSpeed: 100,
    backSpeed: 30,
    backDelay: 500,
    startDelay: 1000,
    loop: true,
});

var links = document.querySelectorAll('.portfolio .filtering .nav-item');
var activeLink = document.querySelector(".portfolio .active");

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (e) {
        var anchor = e.target;
        activeLink.classList.remove("active");
        anchor.classList.add("active");
        activeLink = anchor;;
    }); 
}