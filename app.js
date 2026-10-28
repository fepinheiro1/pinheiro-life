'use strict';
const slides = [
  {id:'apple-airpods-max-prata',category:'Tecnologia',title:'Som para<br>uma nova<br>fase.',description:'AirPods Max prata com Smart Case e fotos reais para você conferir todos os detalhes do exemplar.',badge:'AirPods Max · com Smart Case',action:'Ver os AirPods Max'},
  {id:'jaeger-lecoultre-atmos-elysee-540',category:'Peça de coleção',title:'Um relógio<br>que vive do<br>ambiente.',description:'Jaeger-LeCoultre Atmos Élysée calibre 540, impecável e em funcionamento.',badge:'Atmos Élysée · calibre 540',action:'Ver o relógio'},
  {id:'kit-perfumes-importados',category:'Kit completo',title:'Três perfumes.<br>Uma única<br>escolha.',description:'Abercrombie & Fitch, Hollister e Tommy Hilfiger reunidos em um kit vendido somente completo.',badge:'Kit importado · 3 perfumes',action:'Ver o kit'}
];
const $ = selector => document.querySelector(selector);
const money = value => new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL',maximumFractionDigits:0}).format(value);
const price = product => `${money(product.price)}${product.priceSuffix ? ` ${product.priceSuffix}` : ''}`;
const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const productUrl = p => `produto/${p.slug||p.id}/`;
const arrow = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-5-5 5 5-5 5"/></svg>';
const heart = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/></svg>';
let favorites = new Set();
try { const saved = JSON.parse(localStorage.getItem('pinheiro-preview-favorites') || '[]'); if(Array.isArray(saved)) favorites = new Set(saved.filter(id=>products.some(p=>p.id===id))); } catch {}
let filter = 'all', categoryFilter = 'all', onlySaved = false, currentSlide = 0, toastTimer;
const normalize = text => text.toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g,'');
const productSearchText = product => normalize([
  product.name, product.category, product.meta, product.tag, product.condition,
  product.conditionSummary, product.description, product.conditionNotes,
  ...(product.details || []).flat()
].filter(Boolean).join(' '));
function showToast(message){$('#toast').textContent=message;$('#toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),2400);}
function syncFavorites(){
  $('#saved-count').textContent=favorites.size;
  $('#saved-filter').setAttribute('aria-pressed',String(onlySaved));
  document.querySelectorAll('[data-save]').forEach(button=>{const p=products.find(p=>p.id===button.dataset.save);const selected=favorites.has(p.id);button.setAttribute('aria-pressed',String(selected));button.setAttribute('aria-label',`${selected?'Remover dos':'Adicionar aos'} favoritos: ${p.name}`);});
}
function renderProducts(){
  const rawQuery=$('#search-input').value.trim();
  const query=normalize(rawQuery),queryTerms=query.split(/\s+/).filter(Boolean),compactQuery=query.replace(/\s+/g,''),numericCompound=/\d\s+[a-z]/.test(query);
  const shown=products.filter(p=>{const searchText=productSearchText(p),compactSearch=searchText.replace(/\s+/g,''),matchesQuery=!query||(numericCompound?compactSearch.includes(compactQuery):queryTerms.every(term=>searchText.includes(term)));return(filter==='all'||p.type===filter)&&(categoryFilter==='all'||p.categoryId===categoryFilter)&&(!onlySaved||favorites.has(p.id))&&matchesQuery;});
  $('#product-grid').innerHTML=shown.map(p=>`<article class="product-card"><div class="product-image-wrap${p.illustratedCover||p.referenceCover?' has-illustrated-cover':''}"><a class="product-open" href="${productUrl(p)}" aria-label="Ver detalhes de ${esc(p.name)}"><img style="object-fit:${p.imageFit==='contain'?'contain':'cover'}" src="${esc(p.image)}" alt="${esc(p.alt)}" width="1200" height="1600" loading="lazy"></a><button class="favorite" data-save="${esc(p.id)}" aria-pressed="false" aria-label="Adicionar aos favoritos: ${esc(p.name)}">${heart}</button>${p.referenceCover?'<span class="cover-label">Foto de referência</span>':''}<span class="card-tag">${p.status==='sold'?'Vendido':esc(p.tag)}</span></div><div class="product-information"><p class="product-category">${esc(p.category)}${p.isDemo?' · Exemplo':p.isTest?' · Teste':''}</p><h3 class="product-title"><a href="${productUrl(p)}">${esc(p.name)}</a></h3><p class="product-meta">${esc(p.meta)}</p>${p.conditionSummary?`<p class="condition-summary">${esc(p.conditionSummary)}</p>`:''}<div class="product-bottom"><span class="price">${price(p)}</span><a class="details-link" href="${productUrl(p)}">Ver detalhes</a></div></div></article>`).join('');
  document.querySelectorAll('[data-category]').forEach(button=>{button.querySelector('span').textContent=products.filter(p=>button.dataset.category==='all'||p.categoryId===button.dataset.category).length;});
  const categoryName=categories.find(category=>category.id===categoryFilter)?.label;
  $('#catalog-count').textContent=rawQuery?`${shown.length} ${shown.length===1?'resultado':'resultados'} para “${rawQuery}”`:`${shown.length} ${shown.length===1?'item':'itens'} ${onlySaved?'nos favoritos':categoryName?`em ${categoryName}`:'na seleção'}`;
  $('#search-clear').hidden=!rawQuery;
  $('#empty-state').hidden=shown.length>0;
  $('#empty-description').textContent=onlySaved&&favorites.size===0?'Toque no coração de um produto para guardar seus achados.':rawQuery?`Não encontramos nada para “${rawQuery}”. Tente outro nome, marca ou categoria.`:'Experimente outra busca ou veja a seleção completa.';
  document.querySelectorAll('[data-category]').forEach(b=>{const selected=b.dataset.category===categoryFilter;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected));});
  syncFavorites();
}
function setFilter(value){filter=value;onlySaved=false;renderProducts();}
function setCategory(value){categoryFilter=value;onlySaved=false;renderProducts();}
function resetFilters(){filter='all';categoryFilter='all';onlySaved=false;$('#search-input').value='';renderProducts();}
function showSlide(index){
  currentSlide=(index+slides.length)%slides.length;
  const slide=slides[currentSlide],p=products.find(p=>p.id===slide.id);
  $('#hero-title').innerHTML=slide.title;$('#hero-category').textContent=slide.category;$('#hero-description').textContent=slide.description;
  $('#hero-product-name').textContent=p.name;$('#hero-product-price').textContent=money(p.price);$('#hero-action').innerHTML=slide.action+' '+arrow;$('#hero-action').href=productUrl(p);
  $('#hero-image').src=p.heroImage||p.image;$('#hero-image').alt=p.alt;$('#hero-image').width=1200;$('#hero-image').height=1600;
  const imageNote=$('#image-note');const imageNoteText=p.referenceCover?'Foto de referência':p.illustratedCover?'':'Foto do produto';imageNote.textContent=imageNoteText;imageNote.hidden=!imageNoteText;
  $('#hero-badge').textContent=slide.badge;$('#slide-number').textContent=`0${currentSlide+1} / 03`;
  document.querySelectorAll('[data-slide]').forEach((button,index)=>{const active=index===currentSlide;button.classList.toggle('active',active);if(active)button.setAttribute('aria-current','true');else button.removeAttribute('aria-current');});
  if(!matchMedia('(prefers-reduced-motion: reduce)').matches)$('#hero-image').animate([{opacity:.45},{opacity:1}],{duration:280,easing:'ease-out'});
}
$('#category-filters').innerHTML=[{id:'all',label:'Todas'},...categories].map(category=>`<button class="category-filter${category.id==='all'?' active':''}" data-category="${esc(category.id)}" aria-pressed="${category.id==='all'}">${esc(category.label)} <span>0</span></button>`).join('');
$('#product-grid').addEventListener('click',event=>{
  const save=event.target.closest('[data-save]');
  if(save){const id=save.dataset.save;favorites.has(id)?favorites.delete(id):favorites.add(id);try{localStorage.setItem('pinheiro-preview-favorites',JSON.stringify([...favorites]));}catch{}showToast(favorites.has(id)?'Guardado nos seus favoritos.':'Removido dos favoritos.');if(onlySaved){renderProducts();$('#saved-filter').focus();}else syncFavorites();return;}
});
document.querySelectorAll('[data-category]').forEach(button=>button.addEventListener('click',()=>setCategory(button.dataset.category)));
document.querySelectorAll('[data-kit-link]').forEach(link=>link.addEventListener('click',()=>{$('#search-input').value='';categoryFilter='all';setFilter('kit');}));
document.querySelectorAll('[data-reset]').forEach(link=>link.addEventListener('click',resetFilters));
$('#search-input').addEventListener('input',renderProducts);
$('#search-input').addEventListener('keydown',event=>{if(event.key==='Escape'&&event.currentTarget.value){event.preventDefault();event.currentTarget.value='';renderProducts();}});
$('#search-clear').addEventListener('click',()=>{$('#search-input').value='';renderProducts();$('#search-input').focus();});
$('#header-search').addEventListener('click',event=>{
  event.preventDefault();
  $('#produtos').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
  setTimeout(()=>$('#search-input').focus({preventScroll:true}),matchMedia('(prefers-reduced-motion: reduce)').matches?0:420);
});
$('#clear-filters').addEventListener('click',resetFilters);
$('#saved-filter').addEventListener('click',()=>{onlySaved=!onlySaved;filter='all';categoryFilter='all';$('#search-input').value='';renderProducts();$('#produtos').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});});

$('#prev-slide').addEventListener('click',()=>showSlide(currentSlide-1));$('#next-slide').addEventListener('click',()=>showSlide(currentSlide+1));
document.querySelectorAll('[data-slide]').forEach(button=>button.addEventListener('click',()=>showSlide(Number(button.dataset.slide))));
$('.hero').addEventListener('keydown',event=>{if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();showSlide(currentSlide+(event.key==='ArrowRight'?1:-1));}});
let touchStart;
$('.hero-visual').addEventListener('touchstart',event=>{touchStart={x:event.changedTouches[0].clientX,y:event.changedTouches[0].clientY};},{passive:true});
$('.hero-visual').addEventListener('touchend',event=>{if(!touchStart)return;const dx=event.changedTouches[0].clientX-touchStart.x,dy=event.changedTouches[0].clientY-touchStart.y;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)*1.5)showSlide(currentSlide+(dx<0?1:-1));touchStart=null;},{passive:true});
const initialParams=new URLSearchParams(location.search);
if(initialParams.get('tipo')==='kit')filter='kit';
if(categories.some(category=>category.id===initialParams.get('categoria')))categoryFilter=initialParams.get('categoria');
renderProducts();
showSlide(0);
