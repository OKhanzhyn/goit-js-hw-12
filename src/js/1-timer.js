import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

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
    
    if (selectedDates[0] <= currentTime) {     
      startBtn.disabled = true; 
      // window.alert("Please choose a date in the future");
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future.',
    });
    
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
    startBtn.disabled = true; 
    const diff = userSelectedDate - Date.now();
    const timeOnDisplay = convertMs(diff);
    const { days, hours, minutes, seconds } = convertMs(diff);
    let timerDays = addLeadingZero(days);
    let timerHours = addLeadingZero(hours);
    let timerMin = addLeadingZero(minutes);
    let timerSec = addLeadingZero(seconds);
    
    document.querySelector("span[data-days]").innerHTML = timerDays;
    document.querySelector("span[data-hours]").innerHTML = timerHours;
    document.querySelector("span[data-minutes]").innerHTML = timerMin;
    document.querySelector("span[data-seconds]").innerHTML = timerSec;
    
days.timerDays;
hours.timerHours;
minutes.timerMin;
seconds.timerSec;
if (
  timeOnDisplay.days <= 0 &&
  timeOnDisplay.hours <= 0 &&
  timeOnDisplay.minutes <= 0 &&
  timeOnDisplay.seconds <= 0
) {
  clearInterval(countdown);
};

    console.log(timeOnDisplay);
    }, 1000);

  function addLeadingZero(value) { 
    return String(value).padStart(2, "0");
  }
}

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

  
