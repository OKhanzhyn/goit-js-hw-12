// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

// const fulfilledTick = document.querySelector('input[value="fulfilled"]');
// const rejectedTick = document.querySelector('input[value="rejected"]');
const form = document.querySelector(".form");
const notifBtn = document.querySelector('button[type="submit"]');
const delayInput = document.querySelector('input[type="number"]');
notifBtn.addEventListener('click', handleCreateNotif);
form.addEventListener('submit', onSubmitForm);

// Краще брати значення цього елемента форми через elements і в сеттаймауті порівнювати його з конкретним значенням, якщо воно дорівнює "fulfilled" - викликаєте resolve і тільки передаєте туди значення затримки. якщо значення дорівнює "rejected" - ви викликаєте reject і знову ж таки тільки значення передаєте.
// А вже ізітоаст з конкретними повідомленнями ви маєте викликати при обробці промісов, в then/catch. 

function onSubmitForm(event) {
event.preventDefault();
}
 //Вибираємо усі елементи форми
 const formElements = form.elements;
setTimeout(() => {
if () {
    
}
})


function handleCreateNotif() 
{
    const delay = delayInput.value;
console.log(delay);

    const promises = new Promise((resolve, reject) => 
    {
      const isPromiseFulfilled = ('');

       if (isPromiseFulfilled) 
       { fulfilledTick.click;
          resolve("delay");
          iziToast.success({
            title: 'OK',
            message: 'Fulfilled promise in ${delay}ms',
          });
       }
        else 
        {  rejectedTick.onchange;
            reject('delay');
            iziToast.error({
                title: '',
                message: 'Rejected promise in ${delay}ms',
            });
        }       
    })
};
