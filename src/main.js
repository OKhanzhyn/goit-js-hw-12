// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '42048563-a2c01b7234988bf152885bd8d';

const refs = {
    form: document.getElementById('form'),
    resultContainer: document.getElementById('resultContainer'),
    loaderContainer: document.querySelector('.loader'),
    gallery: document.querySelector('.gallery'),
};


refs.form.addEventListener('submit', handleSearch);

function handleSearch(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const photoWrd = form.elements.photoWrd.value;
    console.log(photoWrd);
     
    
    searchPhotoByWrd(photoWrd).then((data) => {
        
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
       console.log(i);
       
       markup += createPhotoCardMarkup(i);
       
       });    
         
    refs.gallery.innerHTML = markup;
    lightbox .refresh();      
    }).finally(() => {               
        
      form.reset()});
}

// loaderContainer.style.display = 'block';
// loaderContainer.style.display = 'none';

function searchPhotoByWrd(photoWrd) {

    const urlParams = new URLSearchParams({
        key: API_KEY,
        q: photoWrd,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    }); 
    return fetch(`${BASE_URL}/?${urlParams}`).then((res) => {
        if (!res.ok) {
        throw new Error(res.statusText);      
        }       
        return res.json();
    }).catch(error => console.log(error))
           
}  

function createPhotoCardMarkup({webformatURL, largeImageURL, tags, likes, views, comments, downloads,
}) {
    return `    
    <li class="photo_card">
    <a class="photo_link" href="${largeImageURL}">
    <img class="photoLarge" src="${webformatURL}" alt="${tags}"/>
    
    <ul class="photo_rate">
    <li class="property-item">
      <p class="property-title">Likes</p>
      <p class="property-value">${likes}</p>
    </li>
    <li class="property-item">
      <p class="property-title">Views</p>
      <p class="property-value">${views}</p>
    </li>
    <li class="property-item">
      <p class="property-title">Comments</p>
      <p class="property-value">${comments}</p>
    </li>
    <li class="property-item">
      <p class="property-title">Downloads</p>
      <p class="property-value">${downloads}</p>
    </li>
  </ul>  
    
    </a>
    </li>`;
}

const lightbox = new SimpleLightbox('.gallery a', {
caption: true,
captionDelay: 250,
fadeSpeed: 250,
captionSelector: "img",
captionsData: "alt",
captionPosition: "bottom",}); 













// const loadingTextEl = document.querySelector('.loading-message');
// const loaderEl = document.querySelector('.loader');

/**
  |==============================
  | ----css-Loader activation---
  |==============================
*/
/*
document.addEventListener('DOMContentLoaded', () => {
    // const formEl = document.querySelector('.search-form');
    // const loadingMessageEl = document.querySelector('.loading-message');
  
    if (!loaderContainer) {
      console.error('Form or loading message element not found.');
      return;
    }  
    loaderContainer.style.display = 'none';
  
    form.addEventListener('submit', async event => {
      event.preventDefault();
  
    //   const searchKey = form.elements.search.value.trim();
  
      if (!photoWrd) {
        createMessage('Search must be filled!');
        return;
      }
  
      formEl.reset();
  
      try {
        loaderContainer.style.display = 'block';
        await downloadImages(photoWrd);
      } catch (error) {
        console.error('Error downloading images:', error.message);
        createMessage('Error downloading images. Please try again later.');
      } finally {
        loaderContainer.style.display = 'none';
      }
})
});

function downloadImages(photoWrd) {
  loaderContainer.style.display = 'block';
//   buttonEl.disabled = true;
//   buttonEl.blur();
  gallery.innerHTML = '';

  fetchImages(photoWrd)
    .then(images => renderImages(images))
    .catch(error => {
      console.error(error);
      createMessage('Error fetching images. Please try again later.');
    })
    .finally(() => {
    loaderContainer.style.display = 'none';
    //   buttonEl.disabled = false;
    });
}
*/






// showloader();
 // hideLoader(); 
// var gallery = $('.gallery a').simpleLightbox();

// <div class="gallery">
//     <a href="images/image1.jpg"><img src="images/thumbs/thumb1.jpg" alt="" title=""/></a>
//     <a href="images/image2.jpg"><img src="images/thumbs/thumb2.jpg" alt="" title="Beautiful Image"/></a>
// </div>

// gallery.next(); // Next Image