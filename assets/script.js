// click anywhere on screen to return to home page
window.onclick = function () {
    // move two directories upwards
    window.location = "../../";
};
/* Randomize array in-place using Durstenfeld shuffle algorithm */
// https://stackoverflow.com/a/12646864
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
// --- SLIDESHOW START ---
// inspired by https://stackoverflow.com/a/25348073
// NOTE: fade effect seems choppy when the images aren't fully loaded yet

var slider = {
    // get array of all the <a> elements inside the slideshow element
    // NOTE: this array contains A LOT of information. we are only using the "href" attribute later below
    array: document.getElementById("slide-container").getElementsByTagName("a"),
    index: 0,
    duration: 6000,
};

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
                .getElementsByTagName("img")[0].src =
                // then modify the "src" attribute to the "href" of the array
                slider.array[slider.index].href;
            // then remove the fade out class
            document.getElementById("slide-container").className = "";
        },
        // important: set this time to the same as in the CSS property
        1000
    );
    // iterate
    slider.index++;
    if (slider.index >= slider.array.length) {
        slider.index = 0;
    }
    // function calls itself to start a loop
    setTimeout(slideShow, slider.duration);
}
shuffleArray(slider.array);
slideShow();
// ------ SLIDESHOW END ------
