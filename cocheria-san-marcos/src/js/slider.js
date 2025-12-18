// This file manages the functionality of the main slider, including transitions, animations, and navigation controls.

document.addEventListener('DOMContentLoaded', function() {
let currentSlide = 0;
const slides = document.querySelectorAll('.slider-item');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Click en el slider para avanzar
const sliderContainer = document.querySelector('.slider-container');
if (sliderContainer) {
    sliderContainer.addEventListener('click', nextSlide);
}



// Auto-slide cada 5 segundos
    setInterval(nextSlide, 5000);

// Mostrar el primer slide al cargar
showSlide(currentSlide);
});
