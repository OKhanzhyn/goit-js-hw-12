import{i as n,S as p}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();function d({webformatURL:s,largeImageURL:r,tags:l,likes:o,views:e,comments:t,downloads:i}){return`    
    <li class="photo_card">
    <a class="photo_link" href="${r}">
    <img class="photoLarge" src="${s}" alt="${l}"/>
    
    <ul class="photo_rate">
    <li class="property-item">
      <p class="property-title">Likes</p>
      <p class="property-value">${o}</p>
    </li>
    <li class="property-item">
      <p class="property-title">Views</p>
      <p class="property-value">${e}</p>
    </li>
    <li class="property-item">
      <p class="property-title">Comments</p>
      <p class="property-value">${t}</p>
    </li>
    <li class="property-item">
      <p class="property-title">Downloads</p>
      <p class="property-value">${i}</p>
    </li>
  </ul>      
    </a>
    </li>`}const u="https://pixabay.com/api",m="42048563-a2c01b7234988bf152885bd8d";function h(s){return axios.get(`${u}`,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15}}).then(({data:r})=>r)}const a={form:document.getElementById("form"),resultContainer:document.getElementById("resultContainer"),loaderContainer:document.querySelector(".loader"),gallery:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".load-btn")},c="is-hidden";a.form.addEventListener("submit",y);async function y(s){s.preventDefault();const r=s.currentTarget,l=r.elements.photoWrd.value.trim();if(!l){n.error({message:"Enter search data",theme:"dark",messageSize:"16px",messageColor:"white",backgroundColor:"#ef4040",position:"topRight",maxWidth:"390px",timeout:5e3});return}a.loaderContainer.style.display="block";try{await h(l).then(o=>{if(console.log(o),o.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",messageSize:"16px",messageColor:"white",backgroundColor:"#ef4040",position:"topRight",maxWidth:"390px",timeout:5e3});return}let e="";o.hits.forEach(t=>{e+=d(t)}),a.gallery.innerHTML=e,f.refresh(),o.hits.length>0?(a.loadMoreBtn.classList.remove(c),a.loadMoreBtn.addEventListener("click",handleLoadMore)):a.loadMoreBtn.classList.add(c)})}catch(o){console.log(o)}finally{a.loaderContainer.style.display="none",r.reset()}}const f=new p(".gallery a",{caption:!0,captionDelay:250,fadeSpeed:250,captionSelector:"img",captionsData:"alt",captionPosition:"bottom"});
//# sourceMappingURL=commonHelpers.js.map
