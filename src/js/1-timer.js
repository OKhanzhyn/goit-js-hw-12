import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const startBtn = document.querySelector('button[data-start]');
const timerFace = document.querySelector(".timer");
const inputInit = document.querySelector('input#datetime-picker');

startBtn.disabled = true;
let userSelectedDate = '';
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    const currentTime = Date.now();
    console.log(currentTime);
    if (selectedDates[0] <= currentTime) {     
      startBtn.disabled = true; 
      window.alert("Please choose a date in the future");
    // return
   }
    else {
      startBtn.disabled = false;
  userSelectedDate = selectedDates[0];
   } },
};
flatpickr(inputInit, options); 
 

// Відлік часу
// Для підрахунку значень використовуй готову функцію convertMs, де ms — різниця між кінцевою і поточною датою в мілісекундах.


  const days = document.querySelector("span[data-days]");
  const hours = document.querySelector("span[data-hours]");
  const minutes = document.querySelector("span[data-minutes]");
  const seconds = document.querySelector("span[data-seconds]");  


startBtn.addEventListener("click", updateTimerFace);
function updateTimerFace(event) {
  const countdown = setInterval(function() {
    const diff = userSelectedDate - Date.now();
    const timeOnDisplay = convertMs(diff);
    const { days, hours, minutes, seconds } = convertMs(diff);
    const timerDays = addLeadingZero(days);
    const timerHours = addLeadingZero(hours);
    const timerMin = addLeadingZero(minutes);
    const timerSec = addLeadingZero(seconds);

    document.getElementsByTagName("span[data-days]").innerHTML = timerDays;
    document.getElementsByTagName("span[data-hours]").innerHTML = timerHours;
    document.getElementsByTagName("span[data-minutes]").innerHTML = timerMin;
    document.getElementsByTagName("span[data-seconds]").innerHTML = timerSec;

    console.log(timeOnDisplay);
    }, 1000);

  function addLeadingZero(value) { 
    return String(value).padStart(2, "0");
  }
}

// timerFace.addEventListener('input', convertMs);
// timerFace.textContent = `${days}:${hours}:${minutes}:${seconds}`;

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  

  console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

  
