$(function () {

});

// intro slider
const slides = document.querySelector('.slide-container');
const slide = document.querySelectorAll('.slide');
const circles = document.querySelectorAll('.circle');
const totalSlides = slide.length;
const autoSlideIntervalInMillis = 7000;

let currentSlideIndex = 1;
updateSlider();

let autoSlideInterval = setInterval(nextSlideWithoutRestart, autoSlideIntervalInMillis);

function restartAutoSlideInterval() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(nextSlideWithoutRestart, autoSlideIntervalInMillis);
}

function nextSlideWithoutRestart() {
  if (currentSlideIndex < totalSlides - 1) {
    currentSlideIndex++;
  } else {
    currentSlideIndex = 0;
  }
  updateSlider();
}

function updateSlider() {
  updateSliderPosition();
  updateActiveCircle();
}

function updateSliderPosition() {
  slides.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
}

function updateActiveCircle() {
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" active", "");
  }
  circles[currentSlideIndex].className += " active";
}

function nextSlide() {
  nextSlideWithoutRestart();
  restartAutoSlideInterval();
}

function previousSlide() {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
  } else {
    currentSlideIndex = totalSlides - 1;
  }
  restartAutoSlideInterval();
  updateSlider();
}

function currentSlide(n) {
  if (n >= 0 && n < totalSlides) {
    currentSlideIndex = n;
    restartAutoSlideInterval();
    updateSlider();
  }
}

// quote slider
const quotes = document.querySelector('.quotes');
const quote = document.querySelectorAll('.quote');
const quoteCircles = document.querySelectorAll('.quote-circle');
const totalQuotes = quote.length;
const autoQuoteIntervalInMillis = 7000;

let currentQuoteIndex = 1;
updateQuotes();

let autoQuoteInterval = setInterval(nextQuote, autoQuoteIntervalInMillis);

function restartAutoQuoteInterval() {
  clearInterval(autoQuoteInterval);
  autoQuoteInterval = setInterval(nextQuote, autoQuoteIntervalInMillis);
}

function nextQuote() {
  if (currentQuoteIndex < totalSlides - 1) {
    currentQuoteIndex++;
  } else {
    currentQuoteIndex = 0;
  }
  updateQuotes();
}

function updateQuotes() {
  updateQuotePosition();
  updateActiveQuoteCircle();
}

function updateQuotePosition() {
  quotes.style.transform = `translateX(-${currentQuoteIndex * 100}%)`;
}

function updateActiveQuoteCircle() {
  for (i = 0; i < quoteCircles.length; i++) {
    quoteCircles[i].className = quoteCircles[i].className.replace(" active-quote-circle", "");
  }
  quoteCircles[currentQuoteIndex].className += " active-quote-circle";
}

function currentQuote(n) {
  if (n >= 0 && n < totalSlides) {
    currentQuoteIndex = n;
    updateQuotes();
    restartAutoQuoteInterval();
  }
}