import{i,S as u}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const f="44800078-24df89d06f24ed99fe7b62add";function m(o){return fetch(`https://pixabay.com/api/?key=${f}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const l=document.querySelector(".gallery"),p=document.querySelector(".search"),c=document.querySelector(".loader");p.addEventListener("submit",h);function h(o){o.preventDefault();const t=o.currentTarget,s=t.elements.query.value.trim().toLowerCase();if(s===""){i.error({title:"Error",message:"Please enter a search term!"});return}l.innerHTML="",c.classList.remove("hidden"),m(s).then(a=>y(a.hits)).catch(g).finally(()=>{c.classList.add("hidden"),t.reset()})}function y(o){const t=o.map(({likes:s,views:a,comments:e,downloads:r,webformatURL:n,largeImageURL:d})=>`
    <a href="${d}" class="card" </>
      <div class="card-img-top">
        <img class="photo" src="${n}" alt="Image">
      </div>
      <div class="card-body">
        <p class="card-text">Likes: ${s}</p>
        <p class="card-text">Views: ${a}</p>
        <p class="card-text">Comments: ${e}</p>
        <p class="card-text">Downloads: ${r}</p>
      </div>
    `).join("");l.innerHTML=t,new u(".gallery a")}function g(){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}
//# sourceMappingURL=commonHelpers.js.map
