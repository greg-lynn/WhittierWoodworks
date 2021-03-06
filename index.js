let slideIndex = 1;
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
  let slides = document.getElementsByClassName("portfolio-image");
  let dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {slideIndex = 1} //when at the end of slides, go to slide one
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", ""); //for each click on a dot, move to the next active class
  }
  slides[slideIndex-1].style.display = "block"; //adds display of block
  dots[slideIndex-1].className += " active"; //strings together class names
}