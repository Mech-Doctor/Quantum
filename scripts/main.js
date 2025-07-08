  AOS.init({
    duration: 800,
    once: false,       // allows re-triggering
    mirror: true       // animates on scroll up
  });

// JavaScript for Partner Carousel
const carousel = document.querySelector('.partner-carousel');
const cards = document.querySelectorAll('.partner-card');
let currentIndex = 0;

function updateCarousel() {
  cards.forEach((card, index) => {
    card.classList.remove('active', 'left', 'right');
    if (index === currentIndex) {
      card.classList.add('active');
    } else if (index === (currentIndex - 1 + cards.length) % cards.length) {
      card.classList.add('left');
    } else if (index === (currentIndex + 1) % cards.length) {
      card.classList.add('right');
    }
  });
}

function scrollLeft() {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  updateCarousel();
}

function scrollRight() {
  currentIndex = (currentIndex + 1) % cards.length;
  updateCarousel();
}

// Initial display
updateCarousel();

// Auto-scroll every 4 seconds
setInterval(scrollRight, 4000);

// Manual scroll
document.getElementById('scroll-left').addEventListener('click', scrollLeft);
document.getElementById('scroll-right').addEventListener('click', scrollRight);
