/* empty css                      */import{S as h,i as d}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const e of n)if(e.type==="childList")for(const l of e.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(n){const e={};return n.integrity&&(e.integrity=n.integrity),n.referrerPolicy&&(e.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?e.credentials="include":n.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(n){if(n.ep)return;n.ep=!0;const e=o(n);fetch(n.href,e)}})();const c=document.getElementById("search-form"),s=document.querySelector(".gallery"),f=document.querySelector(".loader"),p=document.querySelector(".loading-text"),y="https://pixabay.com/api/",g="51573192-1104e7b47bcf1a597d33c16a5",u=new h(".gallery a");window.addEventListener("DOMContentLoaded",()=>{const t=new URLSearchParams(window.location.search).get("query");t&&(c.searchQuery.value=t,m(t))});c.addEventListener("submit",async r=>{r.preventDefault();const t=c.searchQuery.value.trim();t&&(v(t),m(t))});function v(r){const t=`${window.location.pathname}?query=${encodeURIComponent(r)}`;window.history.pushState({path:t},"",t)}async function m(r){s.innerHTML="",s.style.display="none",f.hidden=!1,p.hidden=!1;try{const t=await w(r);if(t.hits.length===0){d.warning({class:"my-warning-toast",message:"Sorry, no images match your search. Please try again!",position:"topRight"}),i();return}L(t.hits)}catch{d.error({message:"Something went wrong. Please try again later.",position:"topRight"}),i()}}function i(){f.hidden=!0,p.hidden=!0,s.style.display="grid"}function w(r){const t=new URLSearchParams({key:g,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${y}?${t}`).then(o=>{if(!o.ok)throw new Error("Fetch failed");return o.json()})}function L(r){const t=r.map(e=>`
      <li class="gallery-item">
        <div class="photo-card">
          <a class="gallery-link" href="${e.largeImageURL}">
            <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
          </a>
          <div class="info">
            <div class="info-column">
              <span class="info-label">Likes</span>
              <span class="info-value">${e.likes}</span>
            </div>
            <div class="info-column">
              <span class="info-label">Views</span>
              <span class="info-value">${e.views}</span>
            </div>
            <div class="info-column">
              <span class="info-label">Comments</span>
              <span class="info-value">${e.comments}</span>
            </div>
            <div class="info-column">
              <span class="info-label">Downloads</span>
              <span class="info-value">${e.downloads}</span>
            </div>
          </div>
        </div>
      </li>
    `).join("");s.insertAdjacentHTML("beforeend",t);const o=s.querySelectorAll("img.gallery-image");let a=0;if(o.length===0){i(),u.refresh();return}o.forEach(e=>{e.complete?n():(e.addEventListener("load",n),e.addEventListener("error",n))});function n(){a++,a===o.length&&(i(),u.refresh())}}
//# sourceMappingURL=index.js.map
