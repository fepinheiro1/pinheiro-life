'use strict';
(() => {
  const STORAGE_KEY='pinheiro-life-cart-v1';
  const CHECKOUT_API_URL='https://pinheiro-life-checkout.pinheirolife.workers.dev/checkout';
  const contacts=[
    {name:'Patricia',number:'5519999554109'},
    {name:'Fernando',number:'5519999642000'}
  ];
  const MONITOR_PAIR_IDS=['samsung-cf390-27-unidade-1','samsung-cf390-27-unidade-2'];
  const MONITOR_PAIR_DISCOUNT=8000;
  const legacyIds={
    'samsung-cf390-27-duas-unidades':'samsung-cf390-27-unidade-1',
    'ubiquiti-unifi-u6-plus':'ubiquiti-unifi-u6-plus-unidade-1'
  };
  const legacyItems={
    'liquidificador-ninja-bl660-1100w':{
      id:'liquidificador-ninja-bl610-1000w',
      name:'Liquidificador Ninja Professional BL610 1000 W 2,1 L',
      price:59000,
      priceLabel:'R$ 590',
      url:'../../produto/liquidificador-ninja-professional-bl610-1000w-21l/',
      image:'../../assets/produtos/liquidificador-ninja-bl610-1000w/capa-cozinha.webp'
    }
  };
  const money=cents=>new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL',maximumFractionDigits:0}).format(cents/100);
  const escapeHtml=value=>String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const readCart=()=>{
    try{
      const parsed=JSON.parse(localStorage.getItem(STORAGE_KEY)||'[]');
      return Array.isArray(parsed)?parsed.filter(item=>item&&item.id&&item.name&&Number.isFinite(Number(item.price))).map(item=>legacyItems[item.id]?{...item,...legacyItems[item.id]}:legacyIds[item.id]?{...item,id:legacyIds[item.id]}:item):[];
    }catch{return [];}
  };
  let cart=readCart();
  const save=()=>{localStorage.setItem(STORAGE_KEY,JSON.stringify(cart));render();};
  const hasMonitorPair=()=>MONITOR_PAIR_IDS.every(id=>cart.some(item=>item.id===id));
  const discount=()=>hasMonitorPair()?MONITOR_PAIR_DISCOUNT:0;
  const total=()=>cart.reduce((sum,item)=>sum+Number(item.price),0)-discount();
  const cartItemFromButton=button=>({
    id:button.dataset.productId,
    name:button.dataset.productName,
    price:Number(button.dataset.productPrice),
    priceLabel:button.dataset.productPriceLabel||money(Number(button.dataset.productPrice)),
    url:new URL(button.dataset.productUrl||location.href,location.href).href,
    image:new URL(button.dataset.productImage||'',location.href).href
  });
  const addItem=item=>{
    if(!item?.id||!item?.name||!Number.isFinite(item.price)||item.price<1)return false;
    if(cart.some(existing=>existing.id===item.id)){openDrawer();announce('Esse produto já está na sua sacola.');return false;}
    cart.push(item);save();announce('Produto adicionado à sacola.');openDrawer();return true;
  };
  const removeItem=id=>{cart=cart.filter(item=>item.id!==id);save();announce('Produto removido da sacola.');};

  const header=document.querySelector('.header-inner');
  const trigger=document.createElement('button');
  trigger.type='button';trigger.className='cart-trigger';trigger.setAttribute('aria-label','Abrir sacola');trigger.setAttribute('aria-expanded','false');
  trigger.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8h14l-1 12H6L5 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></svg><span class="cart-trigger-label">Sacola</span><span class="cart-count">0</span>';
  header?.append(trigger);

  const toast=document.createElement('div');toast.className='cart-toast';toast.setAttribute('role','status');toast.setAttribute('aria-live','polite');document.body.append(toast);
  let toastTimer;
  function announce(message){toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),2200);}

  const overlay=document.createElement('div');overlay.className='cart-overlay';overlay.hidden=true;
  overlay.innerHTML=`<aside class="cart-drawer" role="dialog" aria-modal="true" aria-labelledby="cart-title">
    <div class="cart-drawer-header"><div><span class="green-label">Sua seleção</span><h2 id="cart-title">Sacola</h2></div><button class="cart-close" type="button" aria-label="Fechar sacola">×</button></div>
    <div class="cart-items"></div>
    <div class="cart-empty" hidden><span class="cart-empty-icon" aria-hidden="true">♡</span><h3>Sua sacola está vazia.</h3><p>Adicione os produtos que você gostou para comprar tudo junto.</p><button class="text-link cart-continue" type="button">Continuar explorando</button></div>
    <div class="cart-summary"><div class="cart-bundle-discount" hidden><span>Desconto pelo par de monitores</span><strong>− R$ 80</strong></div><div class="cart-total-row"><span>Total</span><strong class="cart-total">R$ 0</strong></div><p>Os produtos são peças únicas. A inclusão na sacola não faz reserva; a reserva acontece após a confirmação do pagamento.</p><button class="primary-button cart-checkout" type="button">Pagar e retirar <span aria-hidden="true">→</span></button><div class="cart-offers"><span>10% OFF no Pix</span><span>6x sem juros no cartão</span></div><div class="cart-whatsapp"></div><small class="cart-help">Tire dúvidas e combine diretamente pelo WhatsApp.</small></div>
  </aside>`;
  document.body.append(overlay);
  const drawer=overlay.querySelector('.cart-drawer');
  const closeButton=overlay.querySelector('.cart-close');
  const continueButton=overlay.querySelector('.cart-continue');
  const checkoutButton=overlay.querySelector('.cart-checkout');
  let returnFocus=null;
  function openDrawer(){returnFocus=document.activeElement;overlay.hidden=false;document.body.classList.add('cart-open');trigger.setAttribute('aria-expanded','true');closeButton.focus();}
  function closeDrawer(){overlay.hidden=true;document.body.classList.remove('cart-open');trigger.setAttribute('aria-expanded','false');if(returnFocus?.focus)returnFocus.focus();}
  trigger.addEventListener('click',openDrawer);closeButton.addEventListener('click',closeDrawer);continueButton.addEventListener('click',closeDrawer);
  overlay.addEventListener('click',event=>{if(event.target===overlay)closeDrawer();const remove=event.target.closest('[data-cart-remove]');if(remove)removeItem(remove.dataset.cartRemove);});
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!overlay.hidden)closeDrawer();});

  const checkoutDialog=document.createElement('dialog');checkoutDialog.className='cart-checkout-dialog';checkoutDialog.innerHTML=`<button class="interest-dialog-close" type="button" aria-label="Fechar">×</button><span class="green-label">Pagamento seguro</span><h2>Finalizar a sacola</h2><p class="cart-dialog-total"></p><p>Informe seu WhatsApp para associarmos o pedido e combinarmos a retirada.</p><form class="checkout-contact-form" novalidate><label for="cart-checkout-phone">WhatsApp com DDD</label><div class="checkout-phone-field"><span>+55</span><input id="cart-checkout-phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="(19) 99999-9999" maxlength="15" required></div><small>Usaremos o número somente para identificar o pedido e combinar a retirada.</small><button class="primary-button cart-checkout-continue" type="submit">Continuar para o pagamento <span aria-hidden="true">→</span></button></form><p class="payment-status" role="status" aria-live="polite"></p>`;
  document.body.append(checkoutDialog);
  const checkoutPhone=checkoutDialog.querySelector('#cart-checkout-phone');
  const checkoutStatus=checkoutDialog.querySelector('.payment-status');
  const checkoutContinue=checkoutDialog.querySelector('.cart-checkout-continue');
  const formatPhone=value=>{const digits=String(value||'').replace(/\D/g,'').replace(/^55(?=\d{10,11}$)/,'').slice(0,11);if(digits.length<=2)return digits;if(digits.length<=6)return `(${digits.slice(0,2)}) ${digits.slice(2)}`;if(digits.length<=10)return `(${digits.slice(0,2)}) ${digits.slice(2,6)}-${digits.slice(6)}`;return `(${digits.slice(0,2)}) ${digits.slice(2,7)}-${digits.slice(7)}`;};
  checkoutButton.addEventListener('click',()=>{if(!cart.length)return;closeDrawer();checkoutDialog.querySelector('.cart-dialog-total').textContent=`${cart.length} ${cart.length===1?'produto':'produtos'} · ${money(total())}`;checkoutPhone.value=formatPhone(localStorage.getItem('pinheiro-life-whatsapp')||'');checkoutStatus.textContent='';checkoutContinue.disabled=false;checkoutDialog.showModal();checkoutPhone.focus();});
  checkoutDialog.querySelector('.interest-dialog-close').addEventListener('click',()=>checkoutDialog.close());
  checkoutDialog.addEventListener('click',event=>{const bounds=checkoutDialog.getBoundingClientRect();if(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom)checkoutDialog.close();});
  checkoutPhone.addEventListener('input',()=>{checkoutPhone.value=formatPhone(checkoutPhone.value);});
  checkoutDialog.querySelector('form').addEventListener('submit',async event=>{
    event.preventDefault();const digits=checkoutPhone.value.replace(/\D/g,'');
    if(digits.length!==10&&digits.length!==11){checkoutStatus.textContent='Digite um WhatsApp válido com DDD.';checkoutPhone.focus();return;}
    localStorage.setItem('pinheiro-life-whatsapp',digits);checkoutContinue.disabled=true;checkoutStatus.textContent='Preparando seu checkout seguro…';
    try{const response=await fetch(CHECKOUT_API_URL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({productIds:cart.map(item=>item.id),phone:digits})});const checkout=await response.json();if(!response.ok||!checkout.url)throw new Error('checkout_unavailable');location.assign(checkout.url);}catch{checkoutStatus.textContent='O pagamento não abriu agora. Tente novamente ou fale conosco pelo WhatsApp.';checkoutContinue.disabled=false;}
  });

  function whatsappUrl(contact){
    const lines=cart.map((item,index)=>`${index+1}. ${item.name} (${item.priceLabel||money(item.price)})`);
    const discountLine=discount()?`\nDesconto pelo par de monitores: − ${money(discount())}`:'';
    const message=`Olá, ${contact.name}! Estou interessado(a) nestes produtos do pinheiro.life:\n\n${lines.join('\n')}${discountLine}\n\nTotal: ${money(total())}\n\nPodemos combinar a compra e a retirada?`;
    return `https://wa.me/${contact.number}?text=${encodeURIComponent(message)}`;
  }
  function render(){
    const count=document.querySelector('.cart-count');if(count)count.textContent=cart.length;
    const items=overlay.querySelector('.cart-items'),empty=overlay.querySelector('.cart-empty'),summary=overlay.querySelector('.cart-summary');
    empty.hidden=cart.length>0;summary.hidden=cart.length===0;
    items.innerHTML=cart.map(item=>`<article class="cart-item"><a href="${escapeHtml(item.url)}"><img src="${escapeHtml(item.image)}" alt=""></a><div><h3><a href="${escapeHtml(item.url)}">${escapeHtml(item.name)}</a></h3><strong>${escapeHtml(item.priceLabel||money(item.price))}</strong><button type="button" data-cart-remove="${escapeHtml(item.id)}">Remover</button></div></article>`).join('');
    overlay.querySelector('.cart-total').textContent=money(total());
    overlay.querySelector('.cart-bundle-discount').hidden=!discount();
    overlay.querySelector('.cart-whatsapp').innerHTML=contacts.map(contact=>`<a href="${whatsappUrl(contact)}" target="_blank" rel="noopener">Falar com ${contact.name}</a>`).join('');
  }

  document.addEventListener('click',event=>{const button=event.target.closest('[data-add-cart]');if(button&&!button.disabled){event.preventDefault();addItem(cartItemFromButton(button));}});
  window.PinheiroCart={addItem,open:openDrawer,getItems:()=>[...cart]};

  const params=new URLSearchParams(location.search);
  if(params.get('pagamento')==='concluido'&&params.get('carrinho')==='1'){
    cart=[];save();
    const success=document.createElement('dialog');success.className='payment-success-dialog';success.innerHTML='<button class="interest-dialog-close" type="button" aria-label="Fechar">×</button><span class="payment-success-mark" aria-hidden="true">✓</span><span class="green-label">Pagamento concluído</span><h2>Obrigado pela compra!</h2><p>Recebemos a confirmação. Agora é só combinar a retirada dos seus produtos.</p><div class="payment-success-actions"><a class="text-link" href="https://wa.me/5519999554109" target="_blank" rel="noopener">Falar com Patricia</a><a class="text-link" href="https://wa.me/5519999642000" target="_blank" rel="noopener">Falar com Fernando</a></div>';
    document.body.append(success);const clean=()=>{success.close();const url=new URL(location.href);['pagamento','carrinho','receipt_url','order_nsu','slug','capture_method','transaction_nsu'].forEach(key=>url.searchParams.delete(key));history.replaceState({},'',url.pathname+url.search+url.hash);};success.querySelector('.interest-dialog-close').addEventListener('click',clean);success.showModal();
  }
  render();
})();
