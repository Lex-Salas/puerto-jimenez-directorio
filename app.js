const categories=[
{id:'comida',name:'Comida y cafés',icon:'🍽️'},
{id:'hospedaje',name:'Hospedaje',icon:'🛏️'},
{id:'turismo',name:'Turismo y tours',icon:'🦜'},
{id:'compras',name:'Tiendas y compras',icon:'🛍️'},
{id:'servicios',name:'Servicios',icon:'🛠️'},
{id:'transporte',name:'Transporte',icon:'🚕'},
{id:'salud',name:'Salud y bienestar',icon:'🩺'},
{id:'otros',name:'Otros',icon:'📍'}
];

// Datos DEMO: reemplazar con negocios verificados antes de publicar oficialmente.
const businesses=[
{id:1,name:'Café Osa Demo',category:'comida',icon:'☕',desc:'Ejemplo de ficha para cafetería o restaurante local.',address:'Puerto Jiménez, Osa',phone:'',whatsapp:'',hours:'Horario por confirmar',featured:true},
{id:2,name:'Hospedaje Corcovado Demo',category:'hospedaje',icon:'🌿',desc:'Ejemplo de hospedaje para mostrar fotos, servicios y ubicación.',address:'Puerto Jiménez, Osa',phone:'',whatsapp:'',hours:'Recepción por confirmar',featured:true},
{id:3,name:'Tours Golfo Dulce Demo',category:'turismo',icon:'🐬',desc:'Ejemplo para operadores turísticos, guías y experiencias locales.',address:'Puerto Jiménez, Osa',phone:'',whatsapp:'',hours:'Con reserva',featured:true},
{id:4,name:'Mercado Local Demo',category:'compras',icon:'🛒',desc:'Ejemplo para supermercados, pulperías y tiendas de conveniencia.',address:'Puerto Jiménez, Osa',phone:'',whatsapp:'',hours:'Horario por confirmar'},
{id:5,name:'Servicio Técnico Demo',category:'servicios',icon:'🔧',desc:'Ejemplo para talleres, electricidad, reparación y servicios profesionales.',address:'Puerto Jiménez, Osa',phone:'',whatsapp:'',hours:'Horario por confirmar'},
{id:6,name:'Taxi Puerto Jiménez Demo',category:'transporte',icon:'🚕',desc:'Ejemplo para taxis, transporte privado y traslados.',address:'Puerto Jiménez, Osa',phone:'',whatsapp:'',hours:'Disponibilidad por confirmar'},
{id:7,name:'Bienestar Osa Demo',category:'salud',icon:'🩺',desc:'Ejemplo para clínicas, farmacias, fisioterapia y bienestar.',address:'Puerto Jiménez, Osa',phone:'',whatsapp:'',hours:'Horario por confirmar'},
{id:8,name:'Emprendimiento Local Demo',category:'otros',icon:'🌺',desc:'Espacio para artesanía, emprendimientos y otros servicios de la comunidad.',address:'Puerto Jiménez, Osa',phone:'',whatsapp:'',hours:'Horario por confirmar'}
];

let activeCategory='all';
const el=id=>document.getElementById(id);
const normalize=s=>(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
const catName=id=>categories.find(c=>c.id===id)?.name||'Otro';

function renderCategories(){
  el('categoryGrid').innerHTML=categories.map(c=>`<button class="category-card ${activeCategory===c.id?'active':''}" data-cat="${c.id}"><span class="category-icon">${c.icon}</span><strong>${c.name}</strong><small>${businesses.filter(b=>b.category===c.id).length} ${businesses.filter(b=>b.category===c.id).length===1?'negocio':'negocios'}</small></button>`).join('');
  document.querySelectorAll('[data-cat]').forEach(btn=>btn.addEventListener('click',()=>{activeCategory=btn.dataset.cat;renderCategories();renderBusinesses()}));
}

function filtered(){
  const q=normalize(el('searchInput').value);
  return businesses.filter(b=>{
    const inCat=activeCategory==='all'||b.category===activeCategory;
    const hay=normalize(`${b.name} ${b.desc} ${catName(b.category)} ${b.address}`).includes(q);
    return inCat&&hay;
  });
}

function renderBusinesses(){
  const list=filtered();
  el('resultLabel').textContent=`${list.length} resultado${list.length===1?'':'s'}`;
  el('businessGrid').innerHTML=list.map(b=>`<article class="business-card"><div class="business-cover">${b.icon}</div><div class="business-body"><div class="business-title-row"><h3 class="business-title">${b.name}</h3>${b.featured?'<span class="badge">Destacado</span>':''}</div><p class="business-desc">${b.desc}</p><div class="meta"><span>${catName(b.category)}</span><span>📍 ${b.address}</span></div><div class="card-actions"><button class="details-btn" data-id="${b.id}">Ver ficha</button><a class="map-btn" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.address)}">Mapa</a></div></div></article>`).join('');
  el('emptyState').classList.toggle('hidden',list.length>0);
  document.querySelectorAll('.details-btn').forEach(btn=>btn.addEventListener('click',()=>openBusiness(Number(btn.dataset.id))));
}

function openBusiness(id){
  const b=businesses.find(x=>x.id===id); if(!b)return;
  const phone=b.phone?`<div>📞 <a href="tel:${b.phone}">${b.phone}</a></div>`:'';
  const wa=b.whatsapp?`<a href="https://wa.me/${b.whatsapp.replace(/\D/g,'')}" target="_blank" rel="noopener">WhatsApp</a>`:'';
  el('dialogContent').innerHTML=`<div class="dialog-hero"><div class="emoji">${b.icon}</div></div><div class="dialog-body"><p class="eyebrow dark">${catName(b.category)}</p><h2>${b.name}</h2><p>${b.desc}</p><div class="dialog-list"><div>📍 ${b.address}</div><div>🕒 ${b.hours}</div>${phone}</div><div class="dialog-actions">${wa}<a target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.address)}">Cómo llegar</a></div></div>`;
  el('businessDialog').showModal();
}

el('closeDialog').addEventListener('click',()=>el('businessDialog').close());
el('businessDialog').addEventListener('click',e=>{if(e.target===el('businessDialog'))el('businessDialog').close()});
el('searchInput').addEventListener('input',renderBusinesses);
el('clearFilters').addEventListener('click',()=>{activeCategory='all';el('searchInput').value='';renderCategories();renderBusinesses()});
el('businessCount').textContent=businesses.length;el('categoryCount').textContent=categories.length;

let deferredPrompt;
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;el('installBtn').classList.remove('hidden')});
el('installBtn').addEventListener('click',async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;el('installBtn').classList.add('hidden')});
if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js'));
renderCategories();renderBusinesses();
