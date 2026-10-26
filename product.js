'use strict';
const photoButton = document.querySelector('#gallery-link');
const photo = document.querySelector('#gallery-photo');
const video = document.querySelector('#gallery-video');
const videoButton = document.querySelector('#show-product-video');
const thumbnails = [...document.querySelectorAll('[data-photo]')];
const caption = document.querySelector('#gallery-caption');
const hint = document.querySelector('.gallery-hint');
function resetZoom() {
  photoButton.classList.remove('is-zoomed');
  photoButton.setAttribute('aria-pressed','false');
  photoButton.setAttribute('aria-label','Ampliar foto');
  photoButton.scrollTop=0;photoButton.scrollLeft=0;
  hint.textContent='Toque na foto para ampliar.';
}
photoButton.addEventListener('click',()=>{
  const zoomed=photoButton.classList.toggle('is-zoomed');
  photoButton.setAttribute('aria-pressed',String(zoomed));
  photoButton.setAttribute('aria-label',zoomed?'Reduzir foto':'Ampliar foto');
  hint.textContent=zoomed?'Role ou deslize para explorar. Toque novamente para reduzir.':'Toque na foto para ampliar.';
  if(!zoomed){photoButton.scrollTop=0;photoButton.scrollLeft=0;}
});
photoButton.addEventListener('keydown',event=>{if(event.key==='Escape')resetZoom();});
thumbnails.forEach(button=>button.addEventListener('click',()=>{
  resetZoom();
  if(video){video.pause();video.hidden=true;videoButton.setAttribute('aria-pressed','false');}
  photoButton.hidden=false;hint.hidden=false;
  photo.src=button.querySelector('img').src;photo.alt=button.dataset.alt;
  thumbnails.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
  caption.textContent=`${Number(button.dataset.photo)+1} de ${thumbnails.length} · ${button.dataset.alt}`;
}));
if(video){
  videoButton.addEventListener('click',()=>{
    resetZoom();photoButton.hidden=true;hint.hidden=true;video.hidden=false;
    videoButton.setAttribute('aria-pressed','true');
    thumbnails.forEach(b=>b.setAttribute('aria-pressed','false'));
    caption.textContent=video.getAttribute('aria-label');
  });
  window.addEventListener('pagehide',()=>video.pause());
}
const interest=document.querySelector('#interest-button');
interest.addEventListener('click',()=>{
  document.querySelector('#interest-message').hidden=false;
  interest.textContent=interest.dataset.demo==='true'?'Demonstração de contato':'Contato em configuração';
});
