//Fitur Slide images Iklan
const carousel = document.querySelector('.carousel');
const carouselInner = document.querySelector('.carousel-inner');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slides = document.querySelectorAll('.slide');

let currentIndex = 0;
const slideWidth = carousel.clientWidth;

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  carouselInner.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  carouselInner.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
});
