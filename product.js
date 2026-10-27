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
  const contacts=[
    {name:'Patricia',number:'5519999554109',avatar:'../../assets/contacts/patricia.webp'},
    {name:'Fernando',number:'5519999642000',avatar:'../../assets/contacts/fernando.png'}
  ];
  const productName=interest.dataset.productName||document.querySelector('#product-title')?.textContent?.trim()||'produto';
  const productPrice=interest.dataset.productPriceLabel||document.querySelector('.product-info .price')?.textContent?.trim()||'';
  const productPriceCents=Number(interest.dataset.productPrice);
  const productId=interest.dataset.productId||'produto';
  const productUrl=location.href.split('#')[0].split('?')[0];
  const whatsappLink=contact=>{
    const message=`Olá, ${contact.name}! Estou interessado(a) no produto: ${productName} (${productPrice}). Vi no pinheiro.life: ${productUrl}`;
    return `https://wa.me/${contact.number}?text=${encodeURIComponent(message)}`;
  };
  const contactDialog=document.createElement('dialog');
  contactDialog.className='interest-dialog';
  contactDialog.setAttribute('aria-labelledby','interest-dialog-title');
  contactDialog.innerHTML=`
    <button class="interest-dialog-close" type="button" aria-label="Fechar">×</button>
    <p class="green-label">${productName}</p>
    <h2 id="interest-dialog-title">Como prefere continuar?</h2>
    <p class="interest-dialog-price">${productPrice}</p>
    <div class="interest-options">
      <button class="interest-option payment-option" type="button">
        <span class="payment-copy"><strong>Pagar e retirar</strong><small>Pagamento seguro pela InfinitePay.</small></span>
        <span class="payment-offers"><span class="payment-tags"><span>10% OFF no Pix</span><span>6x sem juros no cartão</span></span><span class="payment-arrow" aria-hidden="true">→</span></span>
      </button>
      <div class="interest-option whatsapp-option">
        <div class="whatsapp-contacts">
          ${contacts.map(contact=>`<a href="${whatsappLink(contact)}" target="_blank" rel="noopener"><img class="contact-avatar" src="${contact.avatar}" alt=""><span class="contact-copy"><strong>Falar com ${contact.name}</strong><small>WhatsApp</small></span><span class="contact-arrow" aria-hidden="true">→</span></a>`).join('')}
        </div>
        <small class="whatsapp-help">Tire dúvidas e combine diretamente pelo WhatsApp.</small>
      </div>
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
  paymentButton.addEventListener('click',async()=>{
    if(!Number.isFinite(productPriceCents)||productPriceCents<1){
      paymentStatus.textContent='Não foi possível preparar o valor. Fale conosco pelo WhatsApp.';
      return;
    }
    paymentButton.disabled=true;
    paymentButton.classList.add('is-loading');
    paymentStatus.textContent='Preparando seu pagamento seguro…';
    try{
      const response=await fetch('https://api.checkout.infinitepay.io/links',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          handle:'patirpinheiro',
          order_nsu:`pinheiro-life-${productId}-${Date.now()}`,
          redirect_url:`${productUrl}?pagamento=concluido`,
          items:[{quantity:1,price:productPriceCents,description:productName}]
        })
      });
      const checkout=await response.json();
      if(!response.ok||!checkout.url){
        const error=new Error('checkout indisponível');
        error.userMessage=checkout.error==='external_checkout_not_enabled'
          ? 'O pagamento online está sendo ativado. Enquanto isso, fale conosco pelo WhatsApp.'
          : 'O pagamento não abriu agora. Tente novamente ou fale conosco pelo WhatsApp.';
        throw error;
      }
      location.assign(checkout.url);
    }catch(error){
      paymentStatus.textContent=error.userMessage||'O pagamento não abriu agora. Tente novamente ou fale conosco pelo WhatsApp.';
      paymentButton.disabled=false;
      paymentButton.classList.remove('is-loading');
    }
  });
}
