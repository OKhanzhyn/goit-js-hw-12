import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '42048563-a2c01b7234988bf152885bd8d';

// https://pixabay.com/api/?key=42048563-a2c01b7234988bf152885bd8d&q=yellow+flowers&image_type=photo&orientation=horizontal&safesearch=true&pretty=true

const refs = {
    form: document.getElementById('form'),
    resultContainer: document.getElementById('resultContainer'),
};

refs.form.addEventListener('submit', handleSearch);

function handleSearch(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const photoWrd = form.elements.photoWrd.value;
    console.log(photoWrd);

    searchPhotoByWrd(photoWrd).then((data) => {
      console.log(data);
    })
    .finally(() => form.reset());
}

function searchPhotoByWrd(photoWrd) {
    const urlParams = new URLSearchParams({
        key: API_KEY,
        q: photoWrd,
        image_type: photo,
        orientation: horizontal,
        safesearch: true,
    });
    return fetch(`${BASE_URL}/?${urlParams}`).then((res) => {
        if (!res.ok) {
        throw new Error(res.statusText);// iziToast    
        }
        return res.json();
    }).then(post => console.log(post))
    .catch(error => console.log(error))
  
}  console.log(searchPhotoByWrd);