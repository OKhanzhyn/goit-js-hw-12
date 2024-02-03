import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import createPhotoCardMarkup from "./js/photoCard.js";
import { searchPhotoByWrd } from "./js/photoApi.js";


const refs = {
    form: document.getElementById('form'),
    resultContainer: document.getElementById('resultContainer'),
    loaderContainer: document.querySelector('.loader'),
    gallery: document.querySelector('.gallery'),
    loadMoreBtn: document.querySelector('.load-btn'),
};
const hiddenClass = 'is-hidden';

refs.form.addEventListener('submit', handleSearch);

async function handleSearch(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const photoWrd = form.elements.photoWrd.value;
         
    if(!photoWrd) {
        iziToast.error({
            message: 'Enter search data',
            theme: 'dark',
            messageSize: '16px',
            messageColor: 'white',
            backgroundColor: '#ef4040',
            position: 'topRight',
            maxWidth: '390px',
            timeout: 5000,
        });
        return;
    }

    refs.loaderContainer.style.display = 'block';
try {
    await searchPhotoByWrd(photoWrd).then((data) => {   
        console.log(data);
       
       if (data.hits.length === 0) {
        iziToast.error({
            message: "Sorry, there are no images matching your search query. Please try again!",
            theme: 'dark',
            messageSize: '16px',
            messageColor: 'white',
            backgroundColor: '#ef4040',
            position: 'topRight',
            maxWidth: '390px',
            timeout: 5000,
        });   return;
      }
       
    let markup = "";    
      data.hits.forEach((i) => {        
    //    console.log(i);
       markup += createPhotoCardMarkup(i);
       });             
    refs.gallery.innerHTML = markup;
    lightbox .refresh();  
    if (data.hits.length > 0) {
        refs.loadMoreBtn.classList.remove(hiddenClass); 
    } else {
        refs.loadMoreBtn.classList.add(hiddenClass); 
    }       
    })} catch (err) {
        console.log(err);
    }
    finally {               
        refs.loaderContainer.style.display = 'none';
      form.reset();
    }
}

    //   function handleSearch(event) {
    //     event.preventDefault();
    
    //     const form = event.currentTarget;
    //     const photoWrd = form.elements.photoWrd.value;
             
    //     if(!photoWrd) {
    //         iziToast.error({
    //             message: 'Enter search data',
    //             theme: 'dark',
    //             messageSize: '16px',
    //             messageColor: 'white',
    //             backgroundColor: '#ef4040',
    //             position: 'topRight',
    //             maxWidth: '390px',
    //             timeout: 5000,
    //         });
    //         return;
    //     }
    
    //     refs.loaderContainer.style.display = 'block';
    
    //     searchPhotoByWrd(photoWrd).then((data) => {   
    //         console.log(data);
           
    //        if (data.hits.length === 0) {
    //         iziToast.error({
    //             message: "Sorry, there are no images matching your search query. Please try again!",
    //             theme: 'dark',
    //             messageSize: '16px',
    //             messageColor: 'white',
    //             backgroundColor: '#ef4040',
    //             position: 'topRight',
    //             maxWidth: '390px',
    //             timeout: 5000,
    //         });   return;
    //       }
           
    //     let markup = "";    
    //       data.hits.forEach((i) => {        
    //     //    console.log(i);
    //        markup += createPhotoCardMarkup(i);
    //        });             
    //     refs.gallery.innerHTML = markup;
    //     lightbox .refresh();      
    //     }).finally(() => {               
    //         refs.loaderContainer.style.display = 'none';
    //       form.reset()});}

// function searchPhotoByWrd(photoWrd) {
//     const urlParams = new URLSearchParams({
//         key: API_KEY,
//         q: photoWrd,
//         image_type: 'photo',
//         orientation: 'horizontal',
//         safesearch: true,
//     }); 
//     return fetch(`${BASE_URL}/?${urlParams}`).then((res) => {
//         if (!res.ok) {
//         throw new Error(res.statusText);      
//         }       
//         return res.json();
//     }).catch(error => console.log(error))
// }  

// function createPhotoCardMarkup({webformatURL, largeImageURL, tags, likes, views, comments, downloads
// }) {
//     return `    
//     <li class="photo_card">
//     <a class="photo_link" href="${largeImageURL}">
//     <img class="photoLarge" src="${webformatURL}" alt="${tags}"/>
    
//     <ul class="photo_rate">
//     <li class="property-item">
//       <p class="property-title">Likes</p>
//       <p class="property-value">${likes}</p>
//     </li>
//     <li class="property-item">
//       <p class="property-title">Views</p>
//       <p class="property-value">${views}</p>
//     </li>
//     <li class="property-item">
//       <p class="property-title">Comments</p>
//       <p class="property-value">${comments}</p>
//     </li>
//     <li class="property-item">
//       <p class="property-title">Downloads</p>
//       <p class="property-value">${downloads}</p>
//     </li>
//   </ul>      
//     </a>
//     </li>`;
// }

const lightbox = new SimpleLightbox('.gallery a', {
caption: true,
captionDelay: 250,
fadeSpeed: 250,
captionSelector: "img",
captionsData: "alt",
captionPosition: "bottom",}); 
