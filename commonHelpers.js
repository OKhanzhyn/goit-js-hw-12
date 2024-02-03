import{i as p,S as y}from"./assets/vendor-46aac873.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerpolicy&&(l.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?l.credentials="include":e.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(e){if(e.ep)return;e.ep=!0;const l=o(e);fetch(e.href,l)}})();function u({webformatURL:t,largeImageURL:s,tags:o,likes:a,views:e,comments:l,downloads:n}){return`    
    <li class="photo_card">
    <a class="photo_link" href="${s}">
    <img class="photoLarge" src="${t}" alt="${o}"/>
    
    <ul class="photo_rate">
    <li class="property-item">
      <p class="property-title">Likes</p>
      <p class="property-value">${a}</p>
    </li>
    <li class="property-item">
      <p class="property-title">Views</p>
      <p class="property-value">${e}</p>
    </li>
    <li class="property-item">
      <p class="property-title">Comments</p>
      <p class="property-value">${l}</p>
    </li>
    <li class="property-item">
      <p class="property-title">Downloads</p>
      <p class="property-value">${n}</p>
    </li>
  </ul>      
    </a>
    </li>`}const L="https://pixabay.com/api",b="42048563-a2c01b7234988bf152885bd8d";function h(t,s=1){return axios.get(`${L}/`,{params:{key:b,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15}}).then(({data:o})=>o)}const r={form:document.getElementById("form"),loaderContainer:document.querySelector(".loader"),gallery:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".load-btn"),preloader:document.querySelector(".loader-more")},i="is-hidden";let d=1,c="",m=0,S=15;r.form.addEventListener("submit",k);async function k(t){t.preventDefault(),d=1;const s=t.currentTarget;if(c=s.elements.photoWrd.value.trim(),!c){p.error({message:"Enter search data",theme:"dark",messageSize:"16px",messageColor:"white",backgroundColor:"#ef4040",position:"topRight",maxWidth:"390px",timeout:5e3});return}r.loaderContainer.style.display="block";try{await h(c).then(o=>{if(console.log(o),o.hits.length===0){p.error({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",messageSize:"16px",messageColor:"white",backgroundColor:"#ef4040",position:"topRight",maxWidth:"390px",timeout:5e3});return}let a="";o.hits.forEach(e=>{a+=u(e)}),r.gallery.innerHTML=a,f.refresh(),o.hits.length>0?(r.loadMoreBtn.classList.remove(i),r.loadMoreBtn.addEventListener("click",g)):r.loadMoreBtn.classList.add(i)})}catch(o){console.log(o)}finally{r.loaderContainer.style.display="none",s.reset()}}async function g(){d+=1,r.preloader.classList.remove(i),r.loadMoreBtn.disabled=!0;try{await h(c,d).then(t=>{if(console.log(t),t.hits.length===0){p.error({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",messageSize:"16px",messageColor:"white",backgroundColor:"#ef4040",position:"topRight",maxWidth:"390px",timeout:5e3});return}let s="";t.hits.forEach(o=>{console.log(o),s+=u(o)}),r.gallery.insertAdjacentHTML("beforeend",s),f.refresh(),m=Math.ceil(t.total/S),console.log(m),t.hits.length>0&&t.hits.length!==totalResults?(r.loadMoreBtn.classList.remove(i),r.loadMoreBtn.addEventListener("click",g)):r.loadMoreBtn.classList.add(i)})}catch(t){console.log(t)}finally{r.preloader.classList.add(i),r.loadMoreBtn.disabled=!1}}const f=new y(".gallery a",{caption:!0,captionDelay:250,fadeSpeed:250,captionSelector:"img",captionsData:"alt",captionPosition:"bottom"});
//# sourceMappingURL=commonHelpers.js.map
