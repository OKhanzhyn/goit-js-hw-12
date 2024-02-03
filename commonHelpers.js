import{i as a,S as C}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();function g({webformatURL:t,largeImageURL:r,tags:o,likes:i,views:e,comments:s,downloads:n}){return`    
    <li class="photo_card">
    <a class="photo_link" href="${r}">
    <img class="photoLarge" src="${t}" alt="${o}"/>
    
    <ul class="photo_rate">
    <li class="property-item">
      <p class="property-title">Likes</p>
      <p class="property-value">${i}</p>
    </li>
    <li class="property-item">
      <p class="property-title">Views</p>
      <p class="property-value">${e}</p>
    </li>
    <li class="property-item">
      <p class="property-title">Comments</p>
      <p class="property-value">${s}</p>
    </li>
    <li class="property-item">
      <p class="property-title">Downloads</p>
      <p class="property-value">${n}</p>
    </li>
  </ul>      
    </a>
    </li>`}const L="https://pixabay.com/api",k="42048563-a2c01b7234988bf152885bd8d";function y(t,r=1){return axios.get(`${L}/`,{params:{key:k,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}}).then(({data:o})=>o)}const l={form:document.getElementById("form"),loaderContainer:document.querySelector(".loader"),gallery:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".load-btn"),preloader:document.querySelector(".loader-more")},c="is-hidden";let d=1,p="",h=0,u=15;l.form.addEventListener("submit",v);async function v(t){t.preventDefault(),d=1;const r=t.currentTarget;if(p=r.elements.photoWrd.value.trim(),!p){a.error({message:"Enter search data",theme:"dark",messageSize:"16px",messageColor:"white",backgroundColor:"#ef4040",position:"topRight",maxWidth:"390px",timeout:5e3});return}l.loaderContainer.style.display="block";try{await y(p).then(o=>{if(console.log(o),o.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",messageSize:"16px",messageColor:"white",backgroundColor:"#ef4040",position:"topRight",maxWidth:"390px",timeout:5e3});return}let i="";if(o.hits.forEach(e=>{i+=g(e)}),l.gallery.innerHTML=i,b.refresh(),o.totalHits>0&&o.totalHits<=u){a.error({message:"We're sorry, but you've reached the end of search results.",theme:"dark",messageSize:"16px",messageColor:"white",backgroundColor:"#6C8CFF",position:"topRight",maxWidth:"390px",timeout:5e3});return}else l.loadMoreBtn.classList.remove(c),l.loadMoreBtn.addEventListener("click",f)})}catch(o){console.log(o)}finally{l.loaderContainer.style.display="none",r.reset()}}async function f(){d+=1,l.preloader.classList.remove(c),l.loadMoreBtn.classList.add(c);try{await y(p,d).then(t=>{if(console.log(t),t.hits.length===0){a.error({message:"We're sorry, but you've reached the end of search results.",theme:"dark",messageSize:"16px",messageColor:"white",backgroundColor:"#6C8CFF",position:"topRight",maxWidth:"390px",timeout:5e3});return}let r="";if(t.hits.forEach(o=>{console.log(o),r+=g(o)}),l.gallery.insertAdjacentHTML("beforeend",r),b.refresh(),h=Math.ceil(t.totalHits/u),console.log(h),t.hits.length<u){a.error({message:"We're sorry, but you've reached the end of search results.",theme:"dark",messageSize:"16px",messageColor:"white",backgroundColor:"#6C8CFF",position:"topRight",maxWidth:"390px",timeout:5e3});return}else l.loadMoreBtn.classList.remove(c),l.loadMoreBtn.addEventListener("click",f)})}catch(t){console.log(t),a.warning({title:"Error",message:"Something went wrong"})}finally{l.preloader.classList.add(c);const t=w();window.scrollBy({top:t*2,left:0,behavior:"smooth"})}}const m=document.querySelector(".scroll-to-top-btn");window.addEventListener("scroll",function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?m.style.display="block":m.style.display="none"});m.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});function w(){return document.querySelector(".gallery-item").getBoundingClientRect().height}const b=new C(".gallery a",{caption:!0,captionDelay:250,fadeSpeed:250,captionSelector:"img",captionsData:"alt",captionPosition:"bottom"});
//# sourceMappingURL=commonHelpers.js.map
