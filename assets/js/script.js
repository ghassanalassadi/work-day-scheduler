// checks what the date is and displays it at the top of the page
var currentDay = document.getElementById("currentDay");
timeNow = moment().format("LLLL");
currentDay.innerText = timeNow;

// checks time of day and changes the color of the event fields depending on the time of day
function timeOfDay() {
    /*
        start reference from 9AM and compare to time to see how much time has passed
        and what the current time is. use for loop to make past hours gray
    */
}

// create and save event to local storage
// for 9AM
const saveBtn9AM = document.getElementById('save-btn-9am');
saveBtn9AM.addEventListener('click', function() {
    var eventInput9AM = document.getElementById("event-input-9am");
    localStorage.setItem('eventInput9AM', JSON.stringify(eventInput9AM.value));
    console.log(JSON.parse(localStorage.getItem('eventInput9AM')));
});

// for 10AM
const saveBtn10AM = document.getElementById('save-btn-10am');
saveBtn10AM.addEventListener('click', function() {
    var eventInput10AM = document.getElementById("event-input-10am");
    localStorage.setItem('eventInput10AM', JSON.stringify(eventInput10AM.value));
    console.log(JSON.parse(localStorage.getItem('eventInput10AM')));
});
