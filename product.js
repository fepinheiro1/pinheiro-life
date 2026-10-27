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
if(interest&&!interest.disabled){
  const whatsappNumber='5519999554109';
  const productName=interest.dataset.productName||document.querySelector('#product-title')?.textContent?.trim()||'produto';
  const productPrice=interest.dataset.productPriceLabel||document.querySelector('.product-info .price')?.textContent?.trim()||'';
  const productUrl=location.href.split('#')[0].split('?')[0];
  const whatsappMessage=`Olá, Patricia! Estou interessado(a) no produto: ${productName} (${productPrice}). Vi no pinheiro.life: ${productUrl}`;
  const contactDialog=document.createElement('dialog');
  contactDialog.className='interest-dialog';
  contactDialog.setAttribute('aria-labelledby','interest-dialog-title');
  contactDialog.innerHTML=`
    <button class="interest-dialog-close" type="button" aria-label="Fechar">×</button>
    <p class="green-label">${productName}</p>
    <h2 id="interest-dialog-title">Como prefere continuar?</h2>
    <p class="interest-dialog-price">${productPrice}</p>
    <div class="interest-options">
      <a class="interest-option whatsapp-option" href="https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}" target="_blank" rel="noopener">
        <span><strong>Falar com a Patricia</strong><small>Tire dúvidas e combine diretamente pelo WhatsApp.</small></span>
        <span aria-hidden="true">→</span>
      </a>
      <button class="interest-option payment-option" type="button">
        <span><strong>Pagar e retirar</strong><small>Pagamento seguro pela InfinitePay.</small></span>
        <span aria-hidden="true">→</span>
      </button>
    </div>
    <p class="payment-status" role="status" aria-live="polite"></p>`;
  document.body.append(contactDialog);
  const closeButton=contactDialog.querySelector('.interest-dialog-close');
  const paymentButton=contactDialog.querySelector('.payment-option');
  const paymentStatus=contactDialog.querySelector('.payment-status');
  const closeDialog=()=>contactDialog.close();
  interest.addEventListener('click',()=>contactDialog.showModal());
  closeButton.addEventListener('click',closeDialog);
  contactDialog.addEventListener('click',event=>{
    const bounds=contactDialog.getBoundingClientRect();
    const outside=event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom;
    if(outside)closeDialog();
  });
  paymentButton.addEventListener('click',()=>{
    paymentStatus.textContent='Pagamento online em configuração. Enquanto isso, fale com a Patricia pelo WhatsApp.';
  });
}
