// checks what the date is and displays it at the top of the page
var currentDay = document.getElementById("currentDay");
var timeNow = moment();
//var timeNow = moment().add(4, 'h'); // for testing
var timeFormat = 'hh:mm:ss'; // desired time format
currentDay.innerText = timeNow;

var slot9AM = document.getElementById("slot-9am");
var slot10AM = document.getElementById("slot-10am");
var slot11AM = document.getElementById("slot-11am");
var slot12PM = document.getElementById("slot-12pm");
var slot1PM = document.getElementById("slot-1pm");
var slot2PM = document.getElementById("slot-2pm");
var slot3PM = document.getElementById("slot-3pm");
var slot4PM = document.getElementById("slot-4pm");
var slot5PM = document.getElementById("slot-5pm");


/*
    change classes based on the current time using a switch statement. switch statement will check if each case is true
    time is checked using moment functions isBefore, isBetween and isAfter
*/
switch(true) {
    case (timeNow.isBefore(moment({ hour: 9, minute: 0}))): // check if time is before 9am
        slot9AM.classList.add('future');
        slot10AM.classList.add('future');
        slot11AM.classList.add('future');
        slot12PM.classList.add('future');
        slot1PM.classList.add('future');
        slot2PM.classList.add('future');
        slot3PM.classList.add('future');
        slot4PM.classList.add('future');
        slot5PM.classList.add('future');
        break;
    case (timeNow.isBetween(moment('9:00:00', timeFormat), moment('10:00:00', timeFormat))): // at 9am
        slot9AM.classList.add('present');
        slot10AM.classList.add('future');
        slot11AM.classList.add('future');
        slot12PM.classList.add('future');
        slot1PM.classList.add('future');
        slot2PM.classList.add('future');
        slot3PM.classList.add('future');
        slot4PM.classList.add('future');
        slot5PM.classList.add('future');
        break;
    case (timeNow.isBetween(moment('10:00:00', timeFormat), moment('11:00:00', timeFormat))): // at 10am
        slot9AM.classList.add('past');
        slot10AM.classList.add('present');
        slot11AM.classList.add('future');
        slot12PM.classList.add('future');
        slot1PM.classList.add('future');
        slot2PM.classList.add('future');
        slot3PM.classList.add('future');
        slot4PM.classList.add('future');
        slot5PM.classList.add('future');
        break;
    case (timeNow.isBetween(moment('11:00:00', timeFormat), moment('12:00:00', timeFormat))): // at 11am
        slot9AM.classList.add('past');
        slot10AM.classList.add('past');
        slot11AM.classList.add('present');
        slot12PM.classList.add('future');
        slot1PM.classList.add('future');
        slot2PM.classList.add('future');
        slot3PM.classList.add('future');
        slot4PM.classList.add('future');
        slot5PM.classList.add('future');
        break;
    case (timeNow.isBetween(moment('12:00:00', timeFormat), moment('13:00:00', timeFormat))): // at 12pm
        slot9AM.classList.add('past');
        slot10AM.classList.add('past');
        slot11AM.classList.add('past');
        slot12PM.classList.add('present');
        slot1PM.classList.add('future');
        slot2PM.classList.add('future');
        slot3PM.classList.add('future');
        slot4PM.classList.add('future');
        slot5PM.classList.add('future');
        break;
    case (timeNow.isBetween(moment('13:00:00', timeFormat), moment('14:00:00', timeFormat))): // at 1pm
        slot9AM.classList.add('past');
        slot10AM.classList.add('past');
        slot11AM.classList.add('past');
        slot12PM.classList.add('past');
        slot1PM.classList.add('present');
        slot2PM.classList.add('future');
        slot3PM.classList.add('future');
        slot4PM.classList.add('future');
        slot5PM.classList.add('future');
        break;
    case (timeNow.isBetween(moment('14:00:00', timeFormat), moment('15:00:00', timeFormat))): // at 2pm
        slot9AM.classList.add('past');
        slot10AM.classList.add('past');
        slot11AM.classList.add('past');
        slot12PM.classList.add('past');
        slot1PM.classList.add('past');
        slot2PM.classList.add('present');
        slot3PM.classList.add('future');
        slot4PM.classList.add('future');
        slot5PM.classList.add('future');
        break;
    case (timeNow.isBetween(moment('15:00:00', timeFormat), moment('16:00:00', timeFormat))): // at 3pm
        slot9AM.classList.add('past');
        slot10AM.classList.add('past');
        slot11AM.classList.add('past');
        slot12PM.classList.add('past');
        slot1PM.classList.add('past');
        slot2PM.classList.add('past');
        slot3PM.classList.add('present');
        slot4PM.classList.add('future');
        slot5PM.classList.add('future');
        break;
    case (timeNow.isBetween(moment('16:00:00', timeFormat), moment('17:00:00', timeFormat))): // at 4pm
        slot9AM.classList.add('past');
        slot10AM.classList.add('past');
        slot11AM.classList.add('past');
        slot12PM.classList.add('past');
        slot1PM.classList.add('past');
        slot2PM.classList.add('past');
        slot3PM.classList.add('past');
        slot4PM.classList.add('present');
        slot5PM.classList.add('future');
        break;
    case (timeNow.isBetween(moment('17:00:00', timeFormat), moment('18:00:00', timeFormat))): // at 5pm
        slot9AM.classList.add('past');
        slot10AM.classList.add('past');
        slot11AM.classList.add('past');
        slot12PM.classList.add('past');
        slot1PM.classList.add('past');
        slot2PM.classList.add('past');
        slot3PM.classList.add('past');
        slot4PM.classList.add('past');
        slot5PM.classList.add('present');
        break;
    case (timeNow.isAfter(moment({ hour: 18, minute: 0}))): // check if time is after 6pm
        slot9AM.classList.add('past');
        slot10AM.classList.add('past');
        slot11AM.classList.add('past');
        slot12PM.classList.add('past');
        slot1PM.classList.add('past');
        slot2PM.classList.add('past');
        slot3PM.classList.add('past');
        slot4PM.classList.add('past');
        slot5PM.classList.add('past');
        break;
}


var eventInput9AM = document.getElementById("event-input-9am");
eventInput9AM.value = localStorage.getItem("eventInput9AM");

const saveBtn9AM = document.getElementById('save-btn-9am');
saveBtn9AM.addEventListener('click', function() {
    localStorage.setItem('eventInput9AM', eventInput9AM.value);
});


// for 10AM
var eventInput10AM = document.getElementById("event-input-10am");
eventInput10AM.value = localStorage.getItem("eventInput10AM");

const saveBtn10AM = document.getElementById('save-btn-10am');
saveBtn10AM.addEventListener('click', function() {
    localStorage.setItem('eventInput10AM', eventInput10AM.value);
});

// for 11AM
var eventInput11AM = document.getElementById("event-input-11am");
eventInput11AM.value = localStorage.getItem("eventInput11AM");

const saveBtn11AM = document.getElementById('save-btn-11am');
saveBtn11AM.addEventListener('click', function() {
    localStorage.setItem('eventInput11AM', eventInput11AM.value);
});

// for 12PM
var eventInput12PM = document.getElementById("event-input-12pm");
eventInput12PM.value = localStorage.getItem("eventInput12PM");

const saveBtn12PM = document.getElementById('save-btn-12pm');
saveBtn12PM.addEventListener('click', function() {
    localStorage.setItem('eventInput12PM', eventInput12PM.value);
});

// for 1PM
var eventInput1PM = document.getElementById("event-input-1pm");
eventInput1PM.value = localStorage.getItem("eventInput1PM");

const saveBtn1PM = document.getElementById('save-btn-1pm');
saveBtn1PM.addEventListener('click', function() {
    localStorage.setItem('eventInput1PM', eventInput1PM.value);
});

// for 2PM
var eventInput2PM = document.getElementById("event-input-2pm");
eventInput2PM.value = localStorage.getItem("eventInput2PM");

const saveBtn2PM = document.getElementById('save-btn-2pm');
saveBtn2PM.addEventListener('click', function() {
    localStorage.setItem('eventInput2PM', eventInput2PM.value);
});

// for 3PM
var eventInput3PM = document.getElementById("event-input-3pm");
eventInput3PM.value = localStorage.getItem("eventInput3PM");

const saveBtn3PM = document.getElementById('save-btn-3pm');
saveBtn3PM.addEventListener('click', function() {
    localStorage.setItem('eventInput3PM', eventInput3PM.value);
});

// for 4PM
var eventInput4PM = document.getElementById("event-input-4pm");
eventInput4PM.value = localStorage.getItem("eventInput4PM");

const saveBtn4PM = document.getElementById('save-btn-4pm');
saveBtn4PM.addEventListener('click', function() {
    localStorage.setItem('eventInput4PM', eventInput4PM.value);
});

// for 5PM
var eventInput5PM = document.getElementById("event-input-5pm");
eventInput5PM.value = localStorage.getItem("eventInput5PM");

const saveBtn5PM = document.getElementById('save-btn-5pm');
saveBtn5PM.addEventListener('click', function() {
    localStorage.setItem('eventInput5PM', eventInput5PM.value);
});