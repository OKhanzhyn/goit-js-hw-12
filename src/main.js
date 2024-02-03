import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import createPhotoCardMarkup from "./js/photoCard.js";
import { searchPhotoByWrd } from "./js/photoApi.js";


const refs = {
    form: document.getElementById('form'),
    // resultContainer: document.getElementById('resultContainer'),
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
    //    console.log(i);
       markup += createPhotoCardMarkup(i);
       });             
    refs.gallery.innerHTML = markup;
    lightbox .refresh();  
    // if (data.hits.length > 0) {
    //     refs.loadMoreBtn.classList.remove(hiddenClass); 

    //     refs.loadMoreBtn.addEventListener('click', handleLoadMore);

    // } 
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
        // refs.loadMoreBtn.classList.remove(hiddenClass); 
        // refs.loadMoreBtn.addEventListener('click', handleLoadMore);

    } else {
        // refs.loadMoreBtn.classList.add(hiddenClass); 
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
// refs.loadMoreBtn.disabled = true;

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
        // iziToast.error({
        //     message: "Sorry, there are no images matching your search query. Please try again!",
        //     theme: 'dark',
        //     messageSize: '16px',
        //     messageColor: 'white',
        //     backgroundColor: '#ef4040',
        //     position: 'topRight',
        //     maxWidth: '390px',
        //     timeout: 5000,
        // });   
        return;
      }
    
    let markup = "";    
      data.hits.forEach((i) => {        
       console.log(i);
       markup += createPhotoCardMarkup(i);
       });             
       refs.gallery.insertAdjacentHTML('beforeend', markup );
    lightbox .refresh();  

/*!додано*/   maxPage = Math.ceil(data.totalHits / perPage);
          console.log(maxPage);

// /*!додано*/  if (data.hits.length > 0 && data.hits.length !== data.totalHits)  
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
         
        // refs.loadMoreBtn.classList.remove(hiddenClass); 
        // refs.loadMoreBtn.addEventListener('click', handleLoadMore);
    } else {
        refs.loadMoreBtn.classList.remove(hiddenClass); 
        refs.loadMoreBtn.addEventListener('click', handleLoadMore);
        // refs.loadMoreBtn.classList.add(hiddenClass); 
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

        // refs.loadMoreBtn.disabled = false;

// /*!додано*/ if (page === maxPage) {
//             refs.loadMoreBtn.classList.add(hiddenClass);
//             refs.loadMoreBtn.removeEventListener('click', handleLoadMore);
//             iziToast.show({
//                 message: "We're sorry, but you've reached the end of search results.",
//                 theme: 'dark',
//                 messageSize: '16px',
//                 messageColor: 'white',
//                 backgroundColor: '#ef4040',
//                 position: 'topRight',
//                 maxWidth: '390px',
//                 timeout: 5000,
//             });   return;
//         }
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

