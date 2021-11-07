// get array of all the <section> elements in the <main> element
// we assume each <section> element represents one day of the week
var dayElements = document.querySelector("main").querySelectorAll("section");

// name the days, since the getDay() function returns a number
var weekdays = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
];

// display one day and hide the others. if the day doesn't exist, all are hidden
function displayDay(dayNumber) {
    for (let i = 0; i < dayElements.length; i++) {
        if (dayElements[i].className === weekdays[dayNumber]) {
            dayElements[i].style.display = "block";
        } else {
            dayElements[i].style.display = "none";
        }
    }
}

// get the weekday then display the corresponding day
function refreshDay() {
    var d = new Date().getDay();
    displayDay(d);
}

refreshDay();

// check every once in a while to see if the date changed, then update the display
setInterval(refreshDay, 3 * 3600000);
