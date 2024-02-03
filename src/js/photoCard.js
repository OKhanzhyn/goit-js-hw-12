export default function createPhotoCardMarkup({webformatURL, largeImageURL, tags, likes, views, comments, downloads 
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