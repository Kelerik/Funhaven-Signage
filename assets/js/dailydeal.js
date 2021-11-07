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

// display one day and hide the others
function displayDay(dayNumber) {
    // if no argument passed, get day automatically
    if (!dayNumber) {
        dayNumber = new Date().getDay();
    }
    // iterate through array. if the day doesn't exist, all are hidden
    for (let i = 0; i < dayElements.length; i++) {
        if (dayElements[i].className === weekdays[dayNumber]) {
            dayElements[i].style.display = "block";
        } else {
            dayElements[i].style.display = "none";
        }
    }
}

// ------ START ------
displayDay();
setInterval(displayDay, 3 * 3600000);

// --- FOR TESTING ONLY ---
// - SUNDAY
// displayDay(0)
// - MONDAY
// displayDay(1)
// - TUESDAY
// displayDay(2)
// - WEDNESDAY
displayDay(3);
// - THURSDAY
// displayDay(4);
// - FRIDAY
// displayDay(5);
// - SATURDAY
// displayDay(6);
window.onkeypress = function (event) {
    displayDay(event.keyCode - 49);
};
