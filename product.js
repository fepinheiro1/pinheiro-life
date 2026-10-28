'use strict';
const CHECKOUT_API_URL='https://pinheiro-life-checkout.pinheirolife.workers.dev/checkout';
const AVAILABILITY_API_URL='https://pinheiro-life-checkout.pinheirolife.workers.dev/availability';
const photoButton = document.querySelector('#gallery-link');
const photo = document.querySelector('#gallery-photo');
const video = document.querySelector('#gallery-video');
const videoButton = document.querySelector('#show-product-video');
const thumbnails = [...document.querySelectorAll('[data-photo]')];
const recommendationGrid=document.querySelector('.recommendation-grid');
const recommendationData=document.querySelector('#recommendation-data');
if(recommendationGrid&&recommendationData){
  try{
    const pool=JSON.parse(recommendationData.textContent);
    for(let index=pool.length-1;index>0;index-=1){
      const randomIndex=Math.floor(Math.random()*(index+1));
      [pool[index],pool[randomIndex]]=[pool[randomIndex],pool[index]];
    }
    const selected=pool.slice(0,16);
    const element=(tag,className,text)=>{
      const node=document.createElement(tag);
      if(className)node.className=className;
      if(text!==undefined)node.textContent=text;
      return node;
    };
    const cards=selected.map(product=>{
      const card=element('article','recommendation-card');
      const imageLink=element('a','recommendation-image');
      imageLink.href=product.url;
      imageLink.setAttribute('aria-label',`Ver detalhes de ${product.name}`);
      const image=element('img');
      image.src=product.image;
      image.alt=product.alt;
      image.width=720;
      image.height=960;
      image.loading='lazy';
      imageLink.append(image);
      const info=element('div','recommendation-info');
      const category=element('p','product-category',product.category);
      const title=element('h3');
      const titleLink=element('a','',product.name);
      titleLink.href=product.url;
      title.append(titleLink);
      const meta=element('p','',product.meta);
      const footer=element('div');
      const productPrice=element('span','price',product.price);
      const details=element('a','details-link','Ver detalhes');
      details.href=product.url;
      footer.append(productPrice,details);
      info.append(category,title,meta,footer);
      card.append(imageLink,info);
      return card;
    });
    recommendationGrid.replaceChildren(...cards);
    const count=document.querySelector('[data-recommendation-count]');
    if(count)count.textContent=`${selected.length} produtos`;
  }catch{}
}
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
  photoButton.hidden=false;
  photo.src=button.querySelector('img').src;photo.alt=button.dataset.alt;
  thumbnails.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
}));
if(video){
  videoButton.addEventListener('click',()=>{
    closeLightbox(false);photoButton.hidden=true;video.hidden=false;
    videoButton.setAttribute('aria-pressed','true');
    thumbnails.forEach(b=>b.setAttribute('aria-pressed','false'));
  });
  window.addEventListener('pagehide',()=>video.pause());
}
const interest=document.querySelector('#interest-button');
const addCartButton=document.querySelector('[data-add-cart]');
async function syncProductAvailability(){
  const productId=interest?.dataset.productId||addCartButton?.dataset.productId;
  if(!productId)return;
  try{
    const response=await fetch(AVAILABILITY_API_URL,{cache:'no-store'});
    const availability=await response.json();
    if(!response.ok||!availability.soldProductIds?.includes(productId))return;
    [interest,addCartButton].filter(Boolean).forEach(button=>{button.disabled=true;button.textContent='Vendido';});
  }catch{}
}
syncProductAvailability();
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
    <section class="checkout-contact-step" hidden>
      <button class="checkout-back" type="button">← Voltar</button>
      <span class="green-label">Pagamento seguro</span>
      <h3>Qual é o seu WhatsApp?</h3>
      <p>Vamos associar seu número ao pedido e deixar o checkout mais rápido.</p>
      <form class="checkout-contact-form" novalidate>
        <label for="checkout-phone">WhatsApp com DDD</label>
        <div class="checkout-phone-field"><span>+55</span><input id="checkout-phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="(19) 99999-9999" maxlength="15" required></div>
        <small>Usaremos o número somente para identificar o pedido e combinar a retirada.</small>
        <button class="primary-button checkout-continue" type="submit">Continuar para o pagamento <span aria-hidden="true">→</span></button>
      </form>
    </section>
    <p class="payment-status" role="status" aria-live="polite"></p>`;
  document.body.append(contactDialog);
  const closeButton=contactDialog.querySelector('.interest-dialog-close');
  const paymentButton=contactDialog.querySelector('.payment-option');
  const paymentStatus=contactDialog.querySelector('.payment-status');
  const interestOptions=contactDialog.querySelector('.interest-options');
  const checkoutStep=contactDialog.querySelector('.checkout-contact-step');
  const checkoutBack=contactDialog.querySelector('.checkout-back');
  const checkoutForm=contactDialog.querySelector('.checkout-contact-form');
  const checkoutPhone=contactDialog.querySelector('#checkout-phone');
  const checkoutContinue=contactDialog.querySelector('.checkout-continue');
  const formatPhone=value=>{
    const digits=String(value||'').replace(/\D/g,'').replace(/^55(?=\d{10,11}$)/,'').slice(0,11);
    if(digits.length<=2)return digits;
    if(digits.length<=6)return `(${digits.slice(0,2)}) ${digits.slice(2)}`;
    if(digits.length<=10)return `(${digits.slice(0,2)}) ${digits.slice(2,6)}-${digits.slice(6)}`;
    return `(${digits.slice(0,2)}) ${digits.slice(2,7)}-${digits.slice(7)}`;
  };
  const resetDialog=()=>{
    interestOptions.hidden=false;
    checkoutStep.hidden=true;
    contactDialog.classList.remove('checkout-step-open');
    paymentStatus.textContent='';
    checkoutContinue.disabled=false;
    checkoutContinue.classList.remove('is-loading');
  };
  const closeDialog=()=>{contactDialog.close();resetDialog();};
  interest.addEventListener('click',()=>contactDialog.showModal());
  closeButton.addEventListener('click',closeDialog);
  contactDialog.addEventListener('click',event=>{
    const bounds=contactDialog.getBoundingClientRect();
    const outside=event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom;
    if(outside)closeDialog();
  });
  paymentButton.addEventListener('click',()=>{
    if(!Number.isFinite(productPriceCents)||productPriceCents<1){
      paymentStatus.textContent='Não foi possível preparar o valor. Fale conosco pelo WhatsApp.';
      return;
    }
    interestOptions.hidden=true;
    checkoutStep.hidden=false;
    contactDialog.classList.add('checkout-step-open');
    checkoutPhone.value=formatPhone(localStorage.getItem('pinheiro-life-whatsapp')||'');
    checkoutPhone.focus();
  });
  checkoutBack.addEventListener('click',resetDialog);
  checkoutPhone.addEventListener('input',()=>{checkoutPhone.value=formatPhone(checkoutPhone.value);});
  checkoutForm.addEventListener('submit',async event=>{
    event.preventDefault();
    const digits=checkoutPhone.value.replace(/\D/g,'');
    if(digits.length!==10&&digits.length!==11){
      paymentStatus.textContent='Digite um WhatsApp válido com DDD.';
      checkoutPhone.focus();
      return;
    }
    localStorage.setItem('pinheiro-life-whatsapp',digits);
    checkoutContinue.disabled=true;
    checkoutContinue.classList.add('is-loading');
    paymentStatus.textContent='Preparando seu checkout seguro…';
    try{
      const response=await fetch(CHECKOUT_API_URL,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({productId,phone:digits})
      });
      const checkout=await response.json();
      if(!response.ok||!checkout.url){
        if(checkout.error==='product_unavailable')throw new Error('product_unavailable');
        throw new Error('checkout_unavailable');
      }
      location.assign(checkout.url);
    }catch(error){
      paymentStatus.textContent=error.message==='product_unavailable'
        ?'Este produto acabou de ser vendido e não está mais disponível.'
        :'O pagamento não abriu agora. Tente novamente ou fale conosco pelo WhatsApp.';
      checkoutContinue.disabled=false;
      checkoutContinue.classList.remove('is-loading');
    }
  });
}

const paymentParams=new URLSearchParams(location.search);
if(paymentParams.get('pagamento')==='concluido'){
  const receiptUrl=paymentParams.get('receipt_url');
  const captureMethod=paymentParams.get('capture_method');
  const paidProduct=document.querySelector('#product-title')?.textContent?.trim()||'seu produto';
  const successDialog=document.createElement('dialog');
  successDialog.className='payment-success-dialog';
  successDialog.setAttribute('aria-labelledby','payment-success-title');
  let safeReceiptUrl='';
  try{const candidate=new URL(receiptUrl);if(candidate.protocol==='https:')safeReceiptUrl=candidate.href;}catch(error){}
  const receiptLink=safeReceiptUrl?`<a class="primary-button" href="${safeReceiptUrl.replace(/&/g,'&amp;').replace(/"/g,'&quot;')}" target="_blank" rel="noopener">Ver comprovante</a>`:'';
  const methodLabel=captureMethod==='pix'?'Pix':captureMethod==='credit_card'?'cartão de crédito':'pagamento online';
  const pickupMessage=encodeURIComponent(`Olá! Acabei de pagar ${paidProduct} pelo pinheiro.life e gostaria de combinar a retirada.`);
  successDialog.innerHTML=`<button class="interest-dialog-close" type="button" aria-label="Fechar">×</button><span class="payment-success-mark" aria-hidden="true">✓</span><span class="green-label">Pagamento concluído</span><h2 id="payment-success-title">Obrigado pela compra!</h2><p>Recebemos a confirmação por ${methodLabel}. Agora é só combinar a retirada de <strong>${paidProduct}</strong>.</p><div class="payment-success-actions">${receiptLink}<a class="text-link" href="https://wa.me/5519999554109?text=${pickupMessage}" target="_blank" rel="noopener">Combinar retirada com Patricia</a><a class="text-link" href="https://wa.me/5519999642000?text=${pickupMessage}" target="_blank" rel="noopener">Combinar retirada com Fernando</a></div>`;
  document.body.append(successDialog);
  const cleanPaymentUrl=()=>{
    const clean=new URL(location.href);
    ['pagamento','receipt_url','order_nsu','slug','capture_method','transaction_nsu'].forEach(key=>clean.searchParams.delete(key));
    history.replaceState({},'',clean.pathname+clean.search+clean.hash);
  };
  successDialog.querySelector('.interest-dialog-close').addEventListener('click',()=>{successDialog.close();cleanPaymentUrl();});
  successDialog.addEventListener('click',event=>{
    const bounds=successDialog.getBoundingClientRect();
    if(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom){successDialog.close();cleanPaymentUrl();}
  });
  successDialog.showModal();
}
