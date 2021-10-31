// click anywhere on screen to return to home page
window.onclick = function () {
    window.location = "/";
};

// --- SLIDESHOW START ---
// inspired by https://stackoverflow.com/questions/25347946/add-fade-effect-in-slideshow-javascript
// NOTE: fade effect seems choppy when the images aren't fully loaded yet

// get array of all the <a> elements inside the slideshow element
var imgArray = document
    .getElementById("slide-container")
    .getElementsByTagName("a");
// other slide variables
var slideIndex = 0,
    slideDuration = 6000;

function slideShow() {
    // apply the fadeOut class to make the image fade out using the opacity property
    document.getElementById("slide-container").className += "fadeOut";
    // every X milliseconds, change the "src" attribute of the <img> element to the "href" of the <a> element
    setTimeout(
        function () {
            document
                // search for the slide element
                .getElementById("slide-container")
                // then search for the <img> elements inside it (we are assuming there will only be one, so use the 0th index)
                // then modify the "src" attribute to the "href" of the array
                .getElementsByTagName("img")[0].src = imgArray[slideIndex].href;
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
// ------ SLIDESHOW END ------
