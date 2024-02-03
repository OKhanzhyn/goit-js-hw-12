const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '42048563-a2c01b7234988bf152885bd8d';

// https://pixabay.com/api/?key=42048563-a2c01b7234988bf152885bd8d&q=photoWrd&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=15

function searchPhotoByWrd(photoWrd) {
    return axios
    .get(`${BASE_URL}`, {
        params: {
        key: API_KEY,
        q: photoWrd,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: 1,
        per_page: 15,
        },
    }).then(({ data }) => data);
}
export { searchPhotoByWrd };

//     const urlParams = new URLSearchParams({
//         key: API_KEY,
//         q: photoWrd,
//         image_type: 'photo',
//         orientation: 'horizontal',
//         safesearch: true,
//         page: 1,
//         per_page: 15
//     }); 
//     return fetch(`${BASE_URL}/?${urlParams}`).then((res) => {
//         if (!res.ok) {
//         throw new Error(res.statusText);      
//         }       
//         return res.json();
//     }).catch(error => console.log(error))
           
// }  
