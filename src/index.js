const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');
let current = 0;

images[current].classList.add('active');

carousel.querySelector('.prev').addEventListener('click', () => {
  images[current].classList.remove('active');
  current = current > 0 ? current - 1 : images.length - 1;
  images[current].classList.add('active');
});

carousel.querySelector('.next').addEventListener('click', () => {
  images[current].classList.remove('active');
  current = current < images.length - 1 ? current + 1 : 0;
  images[current].classList.add('active');
});
