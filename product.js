'use strict';
const photoButton = document.querySelector('#gallery-link');
const photo = document.querySelector('#gallery-photo');
const video = document.querySelector('#gallery-video');
const videoButton = document.querySelector('#show-product-video');
const thumbnails = [...document.querySelectorAll('[data-photo]')];
const caption = document.querySelector('#gallery-caption');
const hint = document.querySelector('.gallery-hint');
const lightbox = document.createElement('div');
lightbox.className = 'photo-lightbox';
lightbox.hidden = true;
lightbox.setAttribute('role','dialog');
lightbox.setAttribute('aria-modal','true');
lightbox.setAttribute('aria-label','Foto ampliada do produto');
lightbox.innerHTML = '<button class="photo-lightbox-close" type="button" aria-label="Fechar foto ampliada">×</button><img class="photo-lightbox-image" alt="">';
document.body.append(lightbox);
const lightboxImage = lightbox.querySelector('.photo-lightbox-image');
const lightboxClose = lightbox.querySelector('.photo-lightbox-close');
function closeLightbox(returnFocus=true) {
  if(lightbox.hidden)return;
  lightbox.hidden=true;
  document.body.classList.remove('lightbox-open');
  if(returnFocus)photoButton.focus();
}
function openLightbox() {
  lightboxImage.src=photo.currentSrc||photo.src;
  lightboxImage.alt=photo.alt;
  lightbox.hidden=false;
  document.body.classList.add('lightbox-open');
  lightboxClose.focus();
}
photoButton.addEventListener('click',openLightbox);
lightboxClose.addEventListener('click',()=>closeLightbox());
lightbox.addEventListener('click',event=>{if(event.target===lightbox)closeLightbox();});
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeLightbox();});
thumbnails.forEach(button=>button.addEventListener('click',()=>{
  closeLightbox(false);
  if(video){video.pause();video.hidden=true;videoButton.setAttribute('aria-pressed','false');}
  photoButton.hidden=false;hint.hidden=false;
  photo.src=button.querySelector('img').src;photo.alt=button.dataset.alt;
  thumbnails.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
  caption.textContent=`${Number(button.dataset.photo)+1} de ${thumbnails.length} · ${button.dataset.alt}`;
}));
if(video){
  videoButton.addEventListener('click',()=>{
    closeLightbox(false);photoButton.hidden=true;hint.hidden=true;video.hidden=false;
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
