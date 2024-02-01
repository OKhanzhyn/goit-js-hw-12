import{i,S as c}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p="https://pixabay.com/api",u="42048563-a2c01b7234988bf152885bd8d",n={form:document.getElementById("form"),resultContainer:document.getElementById("resultContainer"),loaderContainer:document.querySelector(".loader"),gallery:document.querySelector(".gallery")};n.form.addEventListener("submit",m);function m(l){l.preventDefault();const o=l.currentTarget,r=o.elements.photoWrd.value;n.loaderContainer.style.display="block",d(r).then(s=>{if(console.log(s),s.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",messageSize:"16px",messageColor:"white",backgroundColor:"#ef4040",position:"topRight",maxWidth:"390px",timeout:5e3});return}let e="";s.hits.forEach(t=>{e+=f(t)}),n.gallery.innerHTML=e,y.refresh()}).finally(()=>{n.loaderContainer.style.display="none",o.reset()})}function d(l){const o=new URLSearchParams({key:u,q:l,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${p}/?${o}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()}).catch(r=>console.log(r))}function f({webformatURL:l,largeImageURL:o,tags:r,likes:s,views:e,comments:t,downloads:a}){return`    
    <li class="photo_card">
    <a class="photo_link" href="${o}">
    <img class="photoLarge" src="${l}" alt="${r}"/>
    
    <ul class="photo_rate">
    <li class="property-item">
      <p class="property-title">Likes</p>
      <p class="property-value">${s}</p>
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
      <p class="property-value">${a}</p>
    </li>
  </ul>      
    </a>
    </li>`}const y=new c(".gallery a",{caption:!0,captionDelay:250,fadeSpeed:250,captionSelector:"img",captionsData:"alt",captionPosition:"bottom"});
//# sourceMappingURL=commonHelpers.js.map
