import{i as p,S as y}from"./assets/vendor-46aac873.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}})();function m({webformatURL:r,largeImageURL:s,tags:t,likes:l,views:e,comments:a,downloads:n}){return`    
    <li class="photo_card">
    <a class="photo_link" href="${s}">
    <img class="photoLarge" src="${r}" alt="${t}"/>
    
    <ul class="photo_rate">
    <li class="property-item">
      <p class="property-title">Likes</p>
      <p class="property-value">${l}</p>
    </li>
    <li class="property-item">
      <p class="property-title">Views</p>
      <p class="property-value">${e}</p>
    </li>
    <li class="property-item">
      <p class="property-title">Comments</p>
      <p class="property-value">${a}</p>
    </li>
    <li class="property-item">
      <p class="property-title">Downloads</p>
      <p class="property-value">${n}</p>
    </li>
  </ul>      
    </a>
    </li>`}const g="https://pixabay.com/api",L="42048563-a2c01b7234988bf152885bd8d";function u(r,s=1){return axios.get(`${g}/`,{params:{key:L,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15}}).then(({data:t})=>t)}const o={form:document.getElementById("form"),loaderContainer:document.querySelector(".loader"),gallery:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".load-btn"),preloader:document.querySelector(".loader-more")},i="is-hidden";let d=1,c="";o.form.addEventListener("submit",b);async function b(r){r.preventDefault(),d=1;const s=r.currentTarget;if(c=s.elements.photoWrd.value.trim(),!c){p.error({message:"Enter search data",theme:"dark",messageSize:"16px",messageColor:"white",backgroundColor:"#ef4040",position:"topRight",maxWidth:"390px",timeout:5e3});return}o.loaderContainer.style.display="block";try{await u(c).then(t=>{if(console.log(t),t.hits.length===0){p.error({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",messageSize:"16px",messageColor:"white",backgroundColor:"#ef4040",position:"topRight",maxWidth:"390px",timeout:5e3});return}let l="";t.hits.forEach(e=>{l+=m(e)}),o.gallery.innerHTML=l,f.refresh(),t.hits.length>0?(o.loadMoreBtn.classList.remove(i),o.loadMoreBtn.addEventListener("click",h)):o.loadMoreBtn.classList.add(i)})}catch(t){console.log(t)}finally{o.loaderContainer.style.display="none",s.reset()}}async function h(){d+=1,o.preloader.classList.remove(i),o.loadMoreBtn.disabled=!0;try{await u(c,d).then(r=>{if(console.log(r),r.hits.length===0){p.error({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",messageSize:"16px",messageColor:"white",backgroundColor:"#ef4040",position:"topRight",maxWidth:"390px",timeout:5e3});return}let s="";r.hits.forEach(t=>{console.log(t),s+=m(t)}),o.gallery.insertAdjacentHTML("beforeend",s),f.refresh(),r.hits.length>0?(o.loadMoreBtn.classList.remove(i),o.loadMoreBtn.addEventListener("click",h)):o.loadMoreBtn.classList.add(i)})}catch(r){console.log(r)}finally{o.preloader.classList.add(i),o.loadMoreBtn.disabled=!1}}const f=new y(".gallery a",{caption:!0,captionDelay:250,fadeSpeed:250,captionSelector:"img",captionsData:"alt",captionPosition:"bottom"});
//# sourceMappingURL=commonHelpers.js.map
