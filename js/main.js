$(function () {

});

let slideIndex = 2;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let circles = document.getElementsByClassName("circle");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  circles[slideIndex - 1].className += " active";
}

let quoteIndex = 2;
showQuotes(quoteIndex);

// Thumbnail image controls
function currentQuote(n) {
  showQuotes(quoteIndex = n);
}

function showQuotes(n) {
  let i;
  let quotes = document.getElementsByClassName("quote");
  let quoteCircles = document.getElementsByClassName("quote-circle");
  if (n > quotes.length) { quoteIndex = 1 }
  if (n < 1) { quoteIndex = quotes.length }
  for (i = 0; i < quotes.length; i++) {
    quotes[i].style.display = "none";
  }
  for (i = 0; i < quoteCircles.length; i++) {
    quoteCircles[i].className = quoteCircles[i].className.replace(" active-quote-circle", "");
  }
  quotes[quoteIndex - 1].style.display = "block";
  quoteCircles[quoteIndex - 1].className += " active-quote-circle";
}