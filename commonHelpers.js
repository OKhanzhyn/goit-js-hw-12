import{i as m,S as y}from"./assets/vendor-46aac873.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerpolicy&&(l.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?l.credentials="include":e.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(e){if(e.ep)return;e.ep=!0;const l=r(e);fetch(e.href,l)}})();function h({webformatURL:t,largeImageURL:s,tags:r,likes:a,views:e,comments:l,downloads:n}){return`    
    <li class="photo_card">
    <a class="photo_link" href="${s}">
    <img class="photoLarge" src="${t}" alt="${r}"/>
    
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
    </li>`}const L="https://pixabay.com/api",b="42048563-a2c01b7234988bf152885bd8d";function u(t,s=1){return axios.get(`${L}/`,{params:{key:b,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15}}).then(({data:r})=>r)}const o={form:document.getElementById("form"),loaderContainer:document.querySelector(".loader"),gallery:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".load-btn"),preloader:document.querySelector(".loader-more")},i="is-hidden";let c=1,p="",d=0,M=15;o.form.addEventListener("submit",S);async function S(t){t.preventDefault(),c=1;const s=t.currentTarget;if(p=s.elements.photoWrd.value.trim(),!p){m.error({message:"Enter search data",theme:"dark",messageSize:"16px",messageColor:"white",backgroundColor:"#ef4040",position:"topRight",maxWidth:"390px",timeout:5e3});return}o.loaderContainer.style.display="block";try{await u(p).then(r=>{if(console.log(r),r.hits.length===0){m.error({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",messageSize:"16px",messageColor:"white",backgroundColor:"#ef4040",position:"topRight",maxWidth:"390px",timeout:5e3});return}let a="";r.hits.forEach(e=>{a+=h(e)}),o.gallery.innerHTML=a,f.refresh(),r.hits.length>0?(o.loadMoreBtn.classList.remove(i),o.loadMoreBtn.addEventListener("click",g)):o.loadMoreBtn.classList.add(i)})}catch(r){console.log(r)}finally{o.loaderContainer.style.display="none",s.reset()}}async function g(){c+=1,o.preloader.classList.remove(i),o.loadMoreBtn.disabled=!0;try{await u(p,c).then(t=>{if(console.log(t),t.hits.length===0){m.error({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",messageSize:"16px",messageColor:"white",backgroundColor:"#ef4040",position:"topRight",maxWidth:"390px",timeout:5e3});return}let s="";t.hits.forEach(r=>{console.log(r),s+=h(r)}),o.gallery.insertAdjacentHTML("beforeend",s),f.refresh();d=Math.ceil(t.total/M),console.log(d);t.hits.length>0&&t.hits.length!==t.total.length?(o.loadMoreBtn.classList.remove(i),o.loadMoreBtn.addEventListener("click",g)):o.loadMoreBtn.classList.add(i)})}catch(t){console.log(t)}finally{o.preloader.classList.add(i),o.loadMoreBtn.disabled=!1,c===d&&o.loadMoreBtn.classList.add(i)}}const f=new y(".gallery a",{caption:!0,captionDelay:250,fadeSpeed:250,captionSelector:"img",captionsData:"alt",captionPosition:"bottom"});
//# sourceMappingURL=commonHelpers.js.map
