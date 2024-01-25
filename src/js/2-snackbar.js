import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const notifBtn = document.querySelector('button[type="submit"]');
const delayInput = document.querySelector('input[type="number"]');

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
event.preventDefault();

const delay = delayInput.value;
console.log(delay);
const promise = new Promise((resolve, reject) => 
{
  setTimeout(() => {
    const radioBtn = form.state.value; 
  if (radioBtn === 'fulfilled') {
   resolve(delay);}
  if (radioBtn === "rejected") {
    reject(delay);}
    console.log(radioBtn);
//   else {
//    return}
  }, delay);
  });
   promise.then((result) => {
    iziToast.success({
        title: 'OK',
        message: `Fulfilled promise in ${delay}ms`,
      });
  })
   .catch((error) => {
    iziToast.error({
        title: '',
        message: `Rejected promise in ${delay}ms`,
    });
});
};
