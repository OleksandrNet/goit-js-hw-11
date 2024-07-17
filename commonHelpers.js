import{S as f,i as l}from"./assets/vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const m="44800078-24df89d06f24ed99fe7b62add";function h(o){return fetch(`https://pixabay.com/api/?key=${m}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function p(o,t){const n=o.map(({likes:s,views:e,comments:r,downloads:a,webformatURL:d,largeImageURL:u})=>`
    <a href="${u}" class="card">
      <div class="card-img-top">
        <img src="${d}" alt="Image">
      </div>
      <div class="card-body">
        <p class="card-title">Likes: ${s}</p>
        <p class="card-text">Views: ${e}</p>
        <p class="card-text">Comments: ${r}</p>
        <p class="card-text">Downloads: ${a}</p>
      </div>
    </a>`).join("");t.innerHTML=n,new f(".gallery a")}const i=document.querySelector(".gallery"),y=document.querySelector(".search"),c=document.querySelector(".loader");y.addEventListener("submit",g);function g(o){o.preventDefault();const t=o.currentTarget,n=t.elements.query.value.trim().toLowerCase();if(n===""){l.error({title:"Error",message:"Please enter a search term!"});return}i.innerHTML="",c.classList.remove("hidden"),h(n).then(s=>{if(s.hits.length===0)throw new Error("No images found");p(s.hits,i)}).catch(L).finally(()=>{c.classList.add("hidden"),t.reset()})}function L(o){l.error({title:"Error",message:o.message||"Sorry, there are no images matching your search query. Please try again!"})}
//# sourceMappingURL=commonHelpers.js.map
