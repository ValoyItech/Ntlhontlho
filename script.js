document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    let index = 0;
    const slides = document.querySelectorAll(".hero-slide img");

    function changeSlide() {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
        index = (index + 1) % slides.length;
    }

    setInterval(changeSlide, 3000);
    changeSlide();
});


document.addEventListener("DOMContentLoaded", function () {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 120
    });

    // Rest of your existing script.js code
    const hamburger = document.querySelector(".hamburger");
    // ... keep existing JS code ...
});
