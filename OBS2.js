const slides = document.querySelector('.slides')
const slide = document.querySelectorAll('.slide')
const nextSlide = document.getElementById('nextSlide')
const prevSlide = document.getElementById('prevSlide')

let index = 0
const total = slide.length;

function updateSlider(){
  slides.style.transform = `translateX(-${index * 100}%)`;
}

nextSlide.addEventListener('click', () => {
  index = (index + 1) % total;
  updateSlider();
});

prevSlide.addEventListener('click', () => {
  index = (index - 1 + total) % total;
  updateSlider();
});

updateSlider();