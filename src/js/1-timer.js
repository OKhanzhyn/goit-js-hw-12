import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const startBtn = document.querySelector('button [type="button"]');
const timerFace = document.querySelector(".timer");

const inputInit = document.querySelector('input#datetime-picker');

let userSelectedDate = ('');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    const currentTime = Date.now();
    if (selectedDates[0] <= currentTime) {
      
    return window.alert("Please choose a date in the future");}
    else {
  userSelectedDate.push(selectedDates);
   } },
};
flatpickr(inputInit, options); 
 



//   Вибір дати

// Відлік часу
// Для підрахунку значень використовуй готову функцію convertMs, де ms — різниця між кінцевою і поточною датою в мілісекундах.


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


  // ???????
  // pad(value) {
  //   return String(value).padStart(2, "0");
  // }

  const timer = new Timer({
    onTick: updateTimerFace,
  });
  
  
  startBtn.addEventListener("click", timer.start.bind(timer));
  function updateTimerFace({ days, hours, mins, secs }) {
    timerFace.textContent = `${days}:${hours}:${mins}:${secs}`;
  }

  console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

  
