import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import createPhotoCardMarkup from "./js/photoCard.js";
import { searchPhotoByWrd } from "./js/photoApi.js";


const refs = {
    form: document.getElementById('form'),
   
    loaderContainer: document.querySelector('.loader'),
    gallery: document.querySelector('.gallery'),
    loadMoreBtn: document.querySelector('.load-btn'),
    preloader: document.querySelector('.loader-more'),
};
const hiddenClass = 'is-hidden';
let page = 1;
let photoWrd = '';
let maxPage = 0; /* додано*/
let perPage = 15; /* додано*/

refs.form.addEventListener('submit', handleSearch);

async function handleSearch(event) {
    event.preventDefault();
    page = 1;
    const form = event.currentTarget;
    photoWrd = form.elements.photoWrd.value.trim();
         
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
    
       markup += createPhotoCardMarkup(i);
       });             
    refs.gallery.innerHTML = markup;
    lightbox .refresh();  
   
    if (data.totalHits > 0 && data.totalHits <= perPage) {
        
        iziToast.error({
            message: "We're sorry, but you've reached the end of search results.",
            theme: 'dark',
            messageSize: '16px',
            messageColor: 'white',
            backgroundColor: '#6C8CFF',
            position: 'topRight',
            maxWidth: '390px',
            timeout: 5000,
        });   return;
       
    } else {
        refs.loadMoreBtn.classList.remove(hiddenClass); 
        refs.loadMoreBtn.addEventListener('click', handleLoadMore);
    }       
    })} catch (err) {
        console.log(err);
    }
    finally {               
        refs.loaderContainer.style.display = 'none';
      form.reset();
    }
}

async function handleLoadMore () {
page += 1;
refs.preloader.classList.remove(hiddenClass);
refs.loadMoreBtn.classList.add(hiddenClass);

try {
    await searchPhotoByWrd(photoWrd, page).then((data) => {   
        console.log(data);
       
       if (data.hits.length === 0) {
        iziToast.error({
            message: "We're sorry, but you've reached the end of search results.",
            theme: 'dark',
            messageSize: '16px',
            messageColor: 'white',
            backgroundColor: '#6C8CFF',
            position: 'topRight',
            maxWidth: '390px',
            timeout: 5000,
        }); 
         return;
      }
    
    let markup = "";    
      data.hits.forEach((i) => {        
       console.log(i);
       markup += createPhotoCardMarkup(i);
       });             
       refs.gallery.insertAdjacentHTML('beforeend', markup );
    lightbox .refresh();  

         maxPage = Math.ceil(data.totalHits / perPage);
          console.log(maxPage);

if (data.hits.length < perPage)  
    {
        iziToast.error({
            message: "We're sorry, but you've reached the end of search results.",
            theme: 'dark',
            messageSize: '16px',
            messageColor: 'white',
            backgroundColor: '#6C8CFF',
            position: 'topRight',
            maxWidth: '390px',
            timeout: 5000,
        });   return;
         
    } else {
        refs.loadMoreBtn.classList.remove(hiddenClass); 
        refs.loadMoreBtn.addEventListener('click', handleLoadMore);
       }       
    
    })} catch (err) {
        console.log(err);
        iziToast.warning({
            title: 'Error',
            message: 'Something went wrong',
        });
    } 
    finally {
        refs.preloader.classList.add(hiddenClass);

        const cardHeight = getGalleryCardHeight();
        window.scrollBy({
        top: cardHeight*2,
        left: 0,
        behavior: "smooth",
    });
  }
}

const scrollButton = document.querySelector('.scroll-to-top-btn');

window.addEventListener('scroll', function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = 'block';
  } else {
    scrollButton.style.display = 'none';
  }
});
scrollButton.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
  
function getGalleryCardHeight() {
  const galleryItem = document.querySelector('.gallery-item');
  const cardHeight = galleryItem.getBoundingClientRect().height;
  return cardHeight;
}

const lightbox = new SimpleLightbox('.gallery a', {
    caption: true,
    captionDelay: 250,
    fadeSpeed: 250,
    captionSelector: "img",
    captionsData: "alt",
    captionPosition: "bottom",}); 

