import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root=path.resolve(import.meta.dirname,'..');
const context={window:{},localStorage:{getItem:()=>null},navigator:{language:'es'}};
vm.createContext(context);
const app=fs.readFileSync(path.join(root,'app.js'),'utf8').split('/* ============================================================\n   Lógica')[0];
vm.runInContext(app,context);
for(let i=1;i<=6;i++){
  const source=fs.readFileSync(path.join(root,`extra-businesses-${i}.js`),'utf8').replace(/el\('businessCount'\)[\s\S]*$/,'');
  vm.runInContext(source,context);
}
const businesses=vm.runInContext('businesses',context);
const categories=vm.runInContext('categories',context);
const base='https://lex-salas.github.io/puerto-jimenez-directorio/';
const escape=s=>String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const slug=s=>s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const out=path.join(root,'negocios');
fs.mkdirSync(out,{recursive:true});

const head=(title,description,canonical)=>`<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escape(title)}</title><meta name="description" content="${escape(description)}"><link rel="canonical" href="${canonical}"><meta name="theme-color" content="#0C2A20"><link rel="icon" href="../icon.svg" type="image/svg+xml"><link rel="stylesheet" href="../styles.css"></head><body>`;
for(const b of businesses){
  const file=`${slug(b.name)}.html`;
  const url=`${base}negocios/${file}`;
  const json=JSON.stringify({'@context':'https://schema.org','@type':'LocalBusiness',name:b.name,description:b.desc,address:{'@type':'PostalAddress',streetAddress:b.address,addressLocality:'Puerto Jiménez',addressRegion:'Puntarenas',addressCountry:'CR'},telephone:b.phone||undefined,url});
  const contact=b.phone?`<a class="primary-btn" href="tel:${b.phone.replace(/[^+\d]/g,'')}">Llamar ${escape(b.phone)}</a>`:'';
  fs.writeFileSync(path.join(out,file),`${head(`${b.name} — Puerto Jiménez Guía`,`${b.desc} ${b.address}`,url)}<header class="hero seo-hero"><div class="wrap nav"><a class="brand" href="../"><span class="brand-mark">PJ</span><span class="brand-text">Puerto Jiménez<br><small>Guía local · Osa</small></span></a></div></header><main class="wrap seo-business"><a href="../">← Volver al directorio</a><p class="eyebrow">${escape(categories.find(c=>c.id===b.category)?.name||b.category)}</p><h1>${escape(b.name)}</h1><p>${escape(b.desc)}</p><div class="dialog-list"><div>📍 ${escape(b.address)}</div><div>🕒 ${escape(b.hours)}</div></div><div class="dialog-actions">${contact}<a href="https://www.google.com/maps/search/?api=1&amp;query=${encodeURIComponent(`${b.name} ${b.address}`)}">Cómo llegar</a><a href="../#negocio=${slug(b.name)}">Abrir ficha interactiva</a></div><p class="data-note">La información puede cambiar. Confirmá horarios y disponibilidad directamente con el negocio.</p></main><script type="application/ld+json">${json.replace(/</g,'\\u003c')}</script></body></html>`);
}

const items=businesses.map(b=>`<li><a href="negocios/${slug(b.name)}.html">${escape(b.name)}</a> — ${escape(b.address)}</li>`).join('\n');
fs.writeFileSync(path.join(root,'directorio.html'),`${head('Directorio completo de Puerto Jiménez','Listado de negocios y servicios de Puerto Jiménez, Península de Osa.',`${base}directorio.html`)}<header class="hero seo-hero"><div class="wrap nav"><a class="brand" href="./"><span class="brand-mark">PJ</span><span class="brand-text">Puerto Jiménez<br><small>Guía local · Osa</small></span></a></div></header><main class="wrap seo-directory-page"><h1>Directorio completo</h1><p>${businesses.length} negocios y servicios de Puerto Jiménez y la Península de Osa.</p><ol>${items}</ol></main></body></html>`);
const urls=['', 'directorio.html',...businesses.map(b=>`negocios/${slug(b.name)}.html`)];
fs.writeFileSync(path.join(root,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u=>`  <url><loc>${base}${u}</loc></url>`).join('\n')}\n</urlset>\n`);
console.log(`Generated ${businesses.length} business pages.`);
