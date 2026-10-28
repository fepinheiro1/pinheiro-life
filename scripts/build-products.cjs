// Run after editing catalog.js: node scripts/build-products.cjs
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const {execFileSync} = require('node:child_process');
const root = path.resolve(__dirname, '..');
const products = vm.runInNewContext(fs.readFileSync(path.join(root, 'catalog.js'), 'utf8') + '\nproducts;');
const money = value => new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL',maximumFractionDigits:0}).format(value);
const price = product => `${money(product.price)}${product.priceSuffix ? ` ${product.priceSuffix}` : ''}`;
const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const arrow = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-5-5 5 5-5 5"/></svg>';
const heart = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/></svg>';
const authenticitySeal = '<div class="authenticity-seal" role="note" aria-label="Garantia de originalidade"><span class="authenticity-seal-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3 5 6v5c0 4.7 2.8 8 7 10 4.2-2 7-5.3 7-10V6l-7-3Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></svg></span><span><strong>Produto original</strong><small>Procedência conhecida e autenticidade garantida.</small></span></div>';

const asset = src => esc('../../' + src.replace(/^\//, ''));
const categoryFamilies=[
 ['Segurança e acesso','Casa inteligente','Monitores','Áudio','Notebooks','Câmeras','Armazenamento','Smartphones','Celulares','Áudio e vídeo','Tecnologia','Rede e conectividade'],
 ['Eletroportáteis','Utensílios profissionais','Adegas e bebidas','Cuidados pessoais'],
 ['Moda fitness','Beach tennis','Tênis'],
 ['Carteiras e acessórios','Relógios','Perfumes']
];
const familyFor=category=>categoryFamilies.findIndex(group=>group.includes(category));
const productUrl=product=>`../../produto/${esc(product.slug||product.id)}/`;
const recommendationCard=product=>`<article class="recommendation-card"><a class="recommendation-image" href="${productUrl(product)}" aria-label="Ver detalhes de ${esc(product.name)}"><img src="${asset(product.image)}" alt="${esc(product.alt)}" width="720" height="960" loading="lazy"></a><div class="recommendation-info"><p class="product-category">${esc(product.category)}</p><h3><a href="${productUrl(product)}">${esc(product.name)}</a></h3><p>${esc(product.meta)}</p><div><span class="price">${price(product)}</span><a class="details-link" href="${productUrl(product)}">Ver detalhes</a></div></div></article>`;
const home = fs.readFileSync(path.join(root,'index.html'),'utf8');
const header = home.match(/<header[\s\S]*?<\/header>/)[0].replaceAll('href="#', 'href="../../#').replace('id="header-search" href="../../#produtos"','id="header-search" href="../../?buscar=1#produtos"').replace('href="../../#produtos" data-kit-link','href="../../?tipo=kit#produtos" data-kit-link').replace(/<button class="saved-button"[\s\S]*?<\/button>/, '<a class="text-link" href="../../#produtos">Ver todos os produtos</a>');
for (const [productIndex,p] of products.entries()) {
 const slug=p.slug||p.id;
 const photos=p.photos?.length?p.photos:[{src:p.image,alt:p.alt}];
 const newPriceReference=p.newPrice||p.newPriceText?`<p class="new-price-reference">${esc(p.newPriceLabel||'Valor de referência novo')}: <strong>${p.newPriceText?esc(p.newPriceText):money(p.newPrice)}</strong>${p.newPriceSource?` · <a href="${esc(p.newPriceSource.url)}" target="_blank" rel="noopener">${esc(p.newPriceSource.label)}</a>`:''}</p>`:'';
 const candidates=products.filter(product=>product.id!==p.id&&product.status!=='sold');
 const exactCategory=candidates.filter(product=>product.category===p.category);
 const family=familyFor(p.category);
 const familyCategories=family<0?[]:categoryFamilies[family];
 const categoryPosition=familyCategories.indexOf(p.category);
 const related=family<0?[]:candidates.filter(product=>product.category!==p.category&&familyFor(product.category)===family).sort((a,b)=>Math.abs(familyCategories.indexOf(a.category)-categoryPosition)-Math.abs(familyCategories.indexOf(b.category)-categoryPosition));
 const remaining=candidates.filter(product=>product.category!==p.category&&!related.includes(product));
 const rotate=(items,offset)=>items.length?[...items.slice(offset%items.length),...items.slice(0,offset%items.length)]:[];
 const recommendations=[...exactCategory,...related,...rotate(remaining,productIndex)].slice(0,16);
 const recommendationSection=`<section class="product-recommendations" aria-labelledby="recommendations-title"><div class="recommendations-heading"><div><span class="green-label">Continue explorando</span><h2 id="recommendations-title">Você também pode gostar</h2><p>Primeiro, produtos da mesma categoria. Depois, outros achados do catálogo.</p></div><span>${recommendations.length} produtos</span></div><div class="recommendation-grid">${recommendations.map(recommendationCard).join('')}</div></section>`;
 const checkoutUrl='';
 const productData=`data-product-id="${esc(p.id)}" data-product-name="${esc(p.name)}" data-product-price="${Math.round(p.price*100)}" data-product-price-label="${esc(price(p))}" data-product-url="../../produto/${esc(p.slug||p.id)}/" data-product-image="${asset(p.image)}"`;
 const content=`<div class="product-gallery"><button class="gallery-enlarge" id="gallery-link" aria-label="Ampliar foto" aria-pressed="false"><img class="product-photo" id="gallery-photo" src="${asset(photos[0].src)}" alt="${esc(photos[0].alt)}"></button>${p.video?`<video id="gallery-video" class="gallery-video" controls playsinline preload="none" poster="${asset(p.video.poster)}" aria-label="${esc(p.video.label)}" hidden><source src="${asset(p.video.src)}" type="video/mp4">Seu navegador não suporta este vídeo. <a href="${asset(p.video.src)}">Abrir vídeo</a></video>`:''}${photos.length>1||p.video?`<div class="gallery-thumbnails" role="group" aria-label="Fotos e vídeo do produto">${photos.map((photo,index)=>`<button class="gallery-thumbnail" data-photo="${index}" data-alt="${esc(photo.alt)}" aria-label="Ver foto ${index+1}: ${esc(photo.alt)}" aria-pressed="${index===0}"><img src="${asset(photo.src)}" alt="" width="60" height="80"></button>`).join('')}${p.video?`<button class="gallery-thumbnail video-thumbnail" id="show-product-video" aria-label="Ver vídeo do produto funcionando" aria-pressed="false"><img src="${asset(p.video.poster)}" alt="" width="60" height="80"><span class="video-thumbnail-play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m9 5 11 7-11 7V5Z"/></svg></span></button>`:''}</div>`:''}</div><div class="product-info"><span class="green-label">${esc(p.tag)}${p.isDemo?' · Exemplo':p.isTest?' · Teste':''}</span><h1 id="product-title">${esc(p.name)}</h1><span class="price">${price(p)}</span>${newPriceReference}${authenticitySeal}<section class="product-description" aria-labelledby="description-title"><h3 id="description-title">Descrição</h3><p>${esc(p.description)}</p></section>${p.conditionNotes?`<section class="condition-notes" aria-labelledby="condition-title"><h3 id="condition-title">Observações sobre o estado</h3><p>${esc(p.conditionNotes)}</p></section>`:''}<dl>${p.details.map(([label,value])=>`<div><dt>${esc(label)}</dt><dd>${esc(value)}</dd></div>`).join('')}</dl><div class="product-actions"><button class="secondary-button" data-add-cart ${productData} ${p.status==='sold'?'disabled':''}>${p.status==='sold'?'Vendido':'Adicionar à sacola'}</button><button class="primary-button" id="interest-button" ${productData} data-checkout-url="${esc(checkoutUrl)}" ${p.status==='sold'?'disabled':''}>${p.status==='sold'?'Vendido':'Comprar agora '+arrow}</button></div><a class="product-pdf-button" href="../../assets/pdfs/produtos/${esc(slug)}.pdf" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h7l4 4v14H7V3Z"/><path d="M14 3v5h5M9.5 15h5m-5 3h5"/></svg>Abrir ficha em PDF</a></div>`;
 const html=`<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#FBFAF9"><title>${esc(p.name)} | pinheiro.life</title><meta name="description" content="${esc(p.description)}"><link rel="icon" href="../../assets/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="../../styles.css?v=42"><script src="../../cart.js?v=4" defer></script><script src="../../product.js?v=11" defer></script></head>
<body><a class="skip-link" href="#product-title">Pular para o produto</a><div class="preview-note">Prévia compartilhada <span>·</span> Catálogo em construção</div>${header}
<main class="page-shell product-page"><nav class="breadcrumb" aria-label="Caminho da página"><a href="../../#produtos">← Voltar aos produtos</a><span aria-current="page">${esc(p.name)}</span></nav><div class="product-layout">${content}</div>${recommendationSection}<footer><a class="wordmark" href="../../">pinheiro<span>.life</span></a><span>Uma nova fase, novos lares.</span><a href="../../#produtos">Continuar explorando</a></footer></main></body></html>`;
 if(!/^[a-z0-9-]+$/.test(slug)) throw Error('Slug inválido: '+slug);
 const folder=path.join(root,'produto',slug);fs.mkdirSync(folder,{recursive:true});fs.writeFileSync(path.join(folder,'index.html'),html);
}
const pdfDataPath=path.join(root,'tmp','pdfs','product-data.json');
fs.mkdirSync(path.dirname(pdfDataPath),{recursive:true});
fs.writeFileSync(pdfDataPath,JSON.stringify(products.map(p=>({id:p.id,slug:p.slug,name:p.name,price:p.price,priceSuffix:p.priceSuffix,description:p.description,image:p.image,photos:p.photos}))));
execFileSync('python3',[path.join(root,'scripts','build-product-pdfs.py'),pdfDataPath,root,path.join(root,'assets','pdfs','produtos')],{stdio:'inherit'});
fs.rmSync(pdfDataPath,{force:true});
console.log(`${products.length} páginas de produto geradas.`);
