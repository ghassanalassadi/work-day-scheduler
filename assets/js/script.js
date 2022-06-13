// checks what the date is and displays it at the top of the page
var currentDay = document.getElementById("currentDay");
timeNow = moment().format("LLLL");
currentDay.innerText = timeNow;

// checks time of day and changes the color of the event fields depending on the time of day
/*
    start reference from 9AM and compare to time to see how much time has passed
    and what the current time is.
*/
var slot9AM = document.getElementById("slot-9am");
var slot10AM = document.getElementById("slot-10am");
var slot11AM = document.getElementById("slot-11am");
var slot12PM = document.getElementById("slot-12pm");
var slot1PM = document.getElementById("slot-1pm");
var slot2PM = document.getElementById("slot-2pm");
var slot3PM = document.getElementById("slot-3pm");
var slot4PM = document.getElementById("slot-4pm");
var slot5PM = document.getElementById("slot-5pm");

var timeFrom9AM = moment(9, 'hours').from();
console.log(timeFrom9AM);
if(timeFrom9AM < 0) {
    slot9AM.classList.add('future');
    slot10AM.classList.add('future');
    slot11AM.classList.add('future');
    slot12PM.classList.add('future');
    slot1PM.classList.add('future');
    slot2PM.classList.add('future');
    slot3PM.classList.add('future');
    slot4PM.classList.add('future');
    slot5PM.classList.add('future');
} else if (timeFrom9AM == 0) {

}


// create and save event to local storage
// for 9AM
const saveBtn9AM = document.getElementById('save-btn-9am');
saveBtn9AM.addEventListener('click', function() {
    var eventInput9AM = document.getElementById("event-input-9am").value;
    var eventOutput9AM = document.getElementById("event-output-9am");
    localStorage.setItem('eventInput9AM', JSON.stringify(eventInput9AM));
    eventOutput9AM.innerHTML = eventInput9AM;
});

// for 10AM
const saveBtn10AM = document.getElementById('save-btn-10am');
saveBtn10AM.addEventListener('click', function() {
    var eventInput10AM = document.getElementById("event-input-10am").value;
    var eventOutput10AM = document.getElementById("event-output-10am");
    localStorage.setItem('eventInput10AM', JSON.stringify(eventInput10AM));
    eventOutput10AM.innerHTML = eventInput10AM;
});

// for 11AM
const saveBtn11AM = document.getElementById('save-btn-11am');
saveBtn11AM.addEventListener('click', function() {
    var eventInput11AM = document.getElementById("event-input-11am").value;
    var eventOutput11AM = document.getElementById("event-output-11am");
    localStorage.setItem('eventInput11AM', JSON.stringify(eventInput11AM));
    eventOutput11AM.innerHTML = eventInput11AM;
});

// for 12PM
const saveBtn12PM = document.getElementById('save-btn-12pm');
saveBtn12PM.addEventListener('click', function() {
    var eventInput12PM = document.getElementById("event-input-12pm").value;
    var eventOutput12PM = document.getElementById("event-output-12pm");
    localStorage.setItem('eventInput12PM', JSON.stringify(eventInput12PM));
    eventOutput12PM.innerHTML = eventInput12PM;
});

// for 1PM
const saveBtn1PM = document.getElementById('save-btn-1pm');
saveBtn1PM.addEventListener('click', function() {
    var eventInput1PM = document.getElementById("event-input-1pm").value;
    var eventOutput1PM = document.getElementById("event-output-1pm");
    localStorage.setItem('eventInput1PM', JSON.stringify(eventInput1PM));
    eventOutput1PM.innerHTML = eventInput1PM;
});

// for 2PM
const saveBtn2PM = document.getElementById('save-btn-2pm');
saveBtn2PM.addEventListener('click', function() {
    var eventInput2PM = document.getElementById("event-input-2pm").value;
    var eventOutput2PM = document.getElementById("event-output-2pm");
    localStorage.setItem('eventInput2PM', JSON.stringify(eventInput2PM));
    eventOutput2PM.innerHTML = eventInput2PM;
});

// for 3PM
const saveBtn3PM = document.getElementById('save-btn-3pm');
saveBtn3PM.addEventListener('click', function() {
    var eventInput3PM = document.getElementById("event-input-3pm").value;
    var eventOutput3PM = document.getElementById("event-output-3pm");
    localStorage.setItem('eventInput3PM', JSON.stringify(eventInput3PM));
    eventOutput3PM.innerHTML = eventInput3PM;
});

// for 4PM
const saveBtn4PM = document.getElementById('save-btn-4pm');
saveBtn4PM.addEventListener('click', function() {
    var eventInput4PM = document.getElementById("event-input-4pm").value;
    var eventOutput4PM = document.getElementById("event-output-4pm");
    localStorage.setItem('eventInput4PM', JSON.stringify(eventInput4PM));
    eventOutput4PM.innerHTML = eventInput4PM;
});

// for 5PM
const saveBtn5PM = document.getElementById('save-btn-5pm');
saveBtn5PM.addEventListener('click', function() {
    var eventInput5PM = document.getElementById("event-input-5pm").value;
    var eventOutput5PM = document.getElementById("event-output-5pm");
    localStorage.setItem('eventInput5PM', JSON.stringify(eventInput5PM));
    eventOutput5PM.innerHTML = eventInput5PM;
});