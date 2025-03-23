// Slideshow functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.product-slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Event listeners for next/prev buttons
document.getElementById('next').addEventListener('click', nextSlide);
document.getElementById('prev').addEventListener('click', prevSlide);

// Initialize the first slide
showSlide(currentSlide);

// Contact form validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent!');
    this.reset();
});

// Menu toggle for mobile
document.getElementById('menu-toggle').addEventListener('click', function() {
    let nav = document.querySelector('nav');
    nav.classList.toggle('open');
});
