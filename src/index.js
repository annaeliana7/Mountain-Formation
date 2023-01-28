var carousel = document.querySelector('.carousel');
var images = carousel.querySelectorAll('img');
var current = 0;

images[current].classList.add('active');

carousel.querySelector('.prev').addEventListener('click', function() {
  images[current].classList.remove('active');
  current = current > 0 ? current - 1 : images.length - 1;
  images[current].classList.add('active');
});

carousel.querySelector('.next').addEventListener('click', function() {
  images[current].classList.remove('active');
  current = current < images.length - 1 ? current + 1 : 0;
  images[current].classList.add('active');
});
