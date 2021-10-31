// click anywhere on screen to return to home page
window.onclick = function () {
    window.location = "/";
};

// SLIDESHOW
// https://stackoverflow.com/questions/25347946/add-fade-effect-in-slideshow-javascript
// NOTE: fade effect seems choppy when the images aren't fully loaded yet

// get array of all the elements with this class
var imgArray = document.getElementsByClassName("slide-img");
// other slide variables
var slideIndex = 0,
    slideDuration = 6000;

function slideShow() {
    // apply the fadeOut class to make the image fade out using the opacity property
    document.getElementById("slide-container").className += "fadeOut";
    // every X milliseconds, change the src attribute to the textContent of the HTML element. this assumes the HTML file path text
    setTimeout(
        function () {
            document.getElementById("slide-container").src =
                imgArray[slideIndex].textContent;
            // then remove the fade out class
            document.getElementById("slide-container").className = "";
        },
        // important: set this duration to the same as in the CSS property
        1000
    );
    // iterate
    slideIndex++;
    if (slideIndex == imgArray.length) {
        slideIndex = 0;
    }
    // function calls itself to start a loop
    setTimeout(slideShow, slideDuration);
}
slideShow();
