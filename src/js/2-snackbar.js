// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const notifBtn = document.querySelector('button[type="submit"]');
const fulfilledTick = document.querySelector('input[value="fulfilled"]');
const rejectedTick = document.querySelector('input[value="rejected"]');
const delayInput = document.querySelector('input[type="number"]');

notifBtn.addEventListener('click', handleCreateNotif);

function handleCreateNotif() 
{
    const delay = delayInput.toString.value;
console.log(delay);
    const promises = new Promise((resolve, reject) => 
    {
      const isPromiseFulfilled = ('');

       if (isPromiseFulfilled) 
       { fulfilledTick.onchange
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
