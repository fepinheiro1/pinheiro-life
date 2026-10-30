'use strict';
(() => {
  const HISTORY_KEY='pinheiro-life-recent-products-v1';
  const DISMISSED_KEY='pinheiro-life-exit-intent-dismissed-v1';
  const SESSION_KEY='pinheiro-life-exit-intent-shown-v1';
  const SUPPRESS_MS=3*24*60*60*1000;
  const preview=new URLSearchParams(location.search).get('exit_preview')==='1';
  const contacts=[
    {name:'Patricia',number:'5519999554109',avatar:'assets/contacts/patricia.webp'},
    {name:'Fernando',number:'5519999642000',avatar:'assets/contacts/fernando.png'}
  ];
  const familyCategories={
    tecnologia:['tecnologia','relogios'],
    casa:['casa-cozinha'],
    moda:['moda-feminina','moda-fitness','beleza','acessorios'],
    esportes:['esportes','moda-fitness'],
    perfumes:['perfumes','beleza','acessorios']
  };
  const escapeHtml=value=>String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const absolute=value=>{try{return new URL(value,location.href).href;}catch{return value;}};
  const siteRoot=()=>{
    const wordmark=document.querySelector('a.wordmark');
    const root=new URL(wordmark?.getAttribute('href')||'./',location.href);
    root.hash='';root.search='';
    if(!root.pathname.endsWith('/'))root.pathname=root.pathname.replace(/[^/]+$/,'');
    return root;
  };
  const readHistory=()=>{
    try{
      const value=JSON.parse(localStorage.getItem(HISTORY_KEY)||'[]');
      return Array.isArray(value)?value.filter(item=>item?.id&&item?.name).slice(0,8):[];
    }catch{return [];}
  };
  const saveHistory=history=>{try{localStorage.setItem(HISTORY_KEY,JSON.stringify(history.slice(0,8)));}catch{}};
  const recordCurrentProduct=()=>{
    const button=document.querySelector('#interest-button[data-product-id]');
    if(!button)return;
    const item={
      id:button.dataset.productId,
      name:button.dataset.productName,
      category:button.dataset.productCategory||'',
      categoryId:button.dataset.productCategoryId||'',
      price:button.dataset.productPriceLabel||'',
      url:absolute(button.dataset.productUrl||location.href),
      image:absolute(button.dataset.productImage||''),
      alt:document.querySelector('#gallery-photo')?.alt||button.dataset.productName,
      visitedAt:Date.now()
    };
    saveHistory([item,...readHistory().filter(product=>product.id!==item.id)]);
  };
  const catalogPool=()=>{
    const data=document.querySelector('#recommendation-data');
    if(data){
      try{return JSON.parse(data.textContent).map(product=>({...product,url:absolute(product.url),image:absolute(product.image)}));}catch{}
    }
    try{
      if(typeof products!=='undefined'&&Array.isArray(products))return products.filter(product=>product.status!=='sold').map(product=>({
        id:product.id,
        name:product.name,
        category:product.category,
        categoryId:product.categoryId,
        meta:product.meta,
        price:new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL',maximumFractionDigits:0}).format(product.price),
        url:absolute(`produto/${product.slug||product.id}/`),
        image:absolute(product.image),
        alt:product.alt
      }));
    }catch{}
    return [];
  };
  const familyFor=categoryId=>Object.entries(familyCategories).find(([,ids])=>ids.includes(categoryId))?.[0]||'';
  const terms=value=>String(value||'').toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g,'').split(/[^a-z0-9]+/).filter(term=>term.length>3);
  const chooseProducts=(pool,history)=>{
    const viewedIds=new Set(history.map(product=>product.id));
    return pool
      .filter(product=>product?.id&&!viewedIds.has(product.id))
      .map(product=>{
        let score=Math.random()*3;
        history.slice(0,4).forEach((viewed,index)=>{
          const weight=Math.max(1,4-index);
          if(product.category===viewed.category)score+=70*weight;
          else if(product.categoryId&&product.categoryId===viewed.categoryId)score+=45*weight;
          else if(familyFor(product.categoryId)&&familyFor(product.categoryId)===familyFor(viewed.categoryId))score+=24*weight;
          const viewedTerms=new Set(terms(`${viewed.name} ${viewed.category}`));
          score+=terms(`${product.name} ${product.category} ${product.meta}`).filter(term=>viewedTerms.has(term)).length*7*weight;
        });
        return {...product,score};
      })
      .sort((a,b)=>b.score-a.score)
      .slice(0,3);
  };
  const blockedByOtherUi=()=>document.querySelector('dialog[open],.cart-overlay:not([hidden]),.photo-lightbox:not([hidden])')||document.body.classList.contains('cart-open')||document.body.classList.contains('lightbox-open');
  const wasRecentlyDismissed=()=>{
    if(preview)return false;
    const dismissed=Number(localStorage.getItem(DISMISSED_KEY)||0);
    return Date.now()-dismissed<SUPPRESS_MS||sessionStorage.getItem(SESSION_KEY)==='1';
  };
  const markDismissed=()=>{
    try{localStorage.setItem(DISMISSED_KEY,String(Date.now()));sessionStorage.setItem(SESSION_KEY,'1');}catch{}
  };
  const whatsappUrl=(contact,history)=>{
    const recent=history.slice(0,3).map(product=>product.name).join(', ');
    const message=`Olá, ${contact.name}! Vi alguns produtos no pinheiro.life${recent?` — especialmente ${recent}`:''} — e gostaria de ajuda para escolher.`;
    return `https://wa.me/${contact.number}?text=${encodeURIComponent(message)}`;
  };
  let dialog;
  function showExitIntent(){
    if(dialog?.open||wasRecentlyDismissed()||blockedByOtherUi())return;
    const history=readHistory();
    if(!history.length)return;
    const selected=chooseProducts(catalogPool(),history);
    if(selected.length<3)return;
    const root=siteRoot();
    dialog=document.createElement('dialog');
    dialog.className='exit-intent-dialog';
    dialog.setAttribute('aria-labelledby','exit-intent-title');
    dialog.innerHTML=`
      <button class="exit-intent-close" type="button" aria-label="Fechar recomendações">×</button>
      <div class="exit-intent-heading"><span class="green-label">Antes de você ir…</span><h2 id="exit-intent-title">Separei mais três achados para você.</h2><p>Escolhidos a partir dos produtos que você visitou por último.</p></div>
      <div class="exit-intent-products">${selected.map(product=>`<a class="exit-intent-product" href="${escapeHtml(product.url)}"><span class="exit-intent-image"><img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.alt||product.name)}" width="260" height="320"></span><span class="exit-intent-product-copy"><small>${escapeHtml(product.category)}</small><strong>${escapeHtml(product.name)}</strong><span>${escapeHtml(product.price)}</span></span></a>`).join('')}</div>
      <div class="exit-intent-contact"><div><strong>Quer ajuda para escolher?</strong><span>Fale diretamente com a gente pelo WhatsApp.</span></div><div class="exit-intent-contact-actions">${contacts.map(contact=>`<a href="${whatsappUrl(contact,history)}" target="_blank" rel="noopener"><img src="${new URL(contact.avatar,root).href}" alt=""><span>Falar com ${contact.name}</span></a>`).join('')}</div></div>`;
    document.body.append(dialog);
    const close=()=>{markDismissed();dialog.close();};
    dialog.querySelector('.exit-intent-close').addEventListener('click',close);
    dialog.addEventListener('cancel',event=>{event.preventDefault();close();});
    dialog.addEventListener('click',event=>{
      const bounds=dialog.getBoundingClientRect();
      if(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom)close();
      if(event.target.closest('a'))markDismissed();
    });
    sessionStorage.setItem(SESSION_KEY,'1');
    dialog.showModal();
    dialog.querySelector('.exit-intent-close').focus();
  }
  recordCurrentProduct();
  if(wasRecentlyDismissed())return;
  let armed=false;
  const armDelay=preview?300:9000;
  setTimeout(()=>{armed=true;if(preview)showExitIntent();},armDelay);
  document.addEventListener('mouseout',event=>{
    if(!armed||innerWidth<760)return;
    if(!event.relatedTarget&&event.clientY<=8)showExitIntent();
  });
  let lastY=scrollY,maxY=scrollY,upward=0;
  addEventListener('scroll',()=>{
    if(!armed)return;
    const current=scrollY;
    maxY=Math.max(maxY,current);
    upward=current<lastY?upward+(lastY-current):0;
    lastY=current;
    const pageHeight=Math.max(1,document.documentElement.scrollHeight-innerHeight);
    if(maxY/pageHeight>.45&&upward>180)showExitIntent();
  },{passive:true});
})();
