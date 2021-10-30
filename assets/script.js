// click anywhere on screen to return to home page
window.onclick = function () {
   window.location = "/";
};
// SLIDESHOW
var slideIndex = 0;

function showSlides() {
   var slides = document.getElementsByClassName("mySlides");
   for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
   }
   slideIndex++;
   if (slideIndex > slides.length) {
      slideIndex = 1;
   }
   slides[slideIndex - 1].style.display = "block";
   setTimeout(showSlides, 6000); // Change image every 2 seconds
}
showSlides();
