const categories=[
{id:'comida',name:'Comida y cafés',icon:'🍽️'},{id:'hospedaje',name:'Hospedaje',icon:'🛏️'},{id:'turismo',name:'Turismo y tours',icon:'🦜'},{id:'compras',name:'Tiendas y compras',icon:'🛍️'},{id:'servicios',name:'Servicios',icon:'🛠️'},{id:'transporte',name:'Transporte',icon:'🚕'},{id:'salud',name:'Salud y bienestar',icon:'🩺'},{id:'otros',name:'Otros',icon:'📍'}];

// Directorio de establecimientos reales localizados en fuentes públicas.
// Teléfonos y horarios pueden cambiar: se recomienda verificación periódica.
const businesses=[
{id:1,name:'El Rinconcito Saboroso',category:'comida',icon:'🍛',desc:'Restaurante de comida costarricense sobre la vía principal.',address:'Ruta 245, Puerto Jiménez, Puntarenas',phone:'+506 2735 5908',whatsapp:'',hours:'Consultar horario actual',featured:true},
{id:2,name:'Restaurante La Toscana',category:'comida',icon:'🍝',desc:'Restaurante en Puerto Jiménez, Península de Osa.',address:'Puerto Jiménez, Puntarenas',phone:'',whatsapp:'',hours:'Consultar horario actual'},
{id:3,name:'Restaurante Guapira',category:'comida',icon:'🍽️',desc:'Restaurante de cocina internacional y tropical en la zona de Puerto Jiménez.',address:'Puerto Jiménez, Puntarenas',phone:'+506 8371 1708',whatsapp:'',hours:'Desayuno, almuerzo y cena; confirmar'},
{id:4,name:'Panadería Monar',category:'comida',icon:'🥐',desc:'Panadería local junto a la Ruta 245, cerca de la delegación policial.',address:'Ruta 245, Puerto Jiménez, Puntarenas',phone:'',whatsapp:'',hours:'Consultar horario actual'},
{id:5,name:'Cafetería Monka',category:'comida',icon:'☕',desc:'Cafetería y restaurante con desayunos, almuerzos, cenas y café.',address:'Calle del Comercio, frente a Fuerza Pública, Puerto Jiménez',phone:'+506 8712 3238',whatsapp:'50687123238',hours:'Lun-Vie aprox. 06:00–21:00; confirmar'},
{id:6,name:'Soda Marbella',category:'comida',icon:'🐟',desc:'Soda y restaurante de mariscos en Puerto Jiménez.',address:'Puerto Jiménez, Puntarenas',phone:'+506 2735 5481',whatsapp:'',hours:'11:00–22:00; confirmar',featured:true},
{id:7,name:'Soda Calilos',category:'comida',icon:'🍲',desc:'Soda local con desayunos, almuerzos, café y comida casual.',address:'GMPW+6F3, Puerto Jiménez, Puntarenas',phone:'',whatsapp:'',hours:'Consultar horario actual'},
{id:8,name:'Aventuras Café',category:'comida',icon:'☕',desc:'Café junto a la playa en Pueblo Viejo con café costarricense y comida fresca.',address:'Pueblo Viejo, contiguo a Aventuras Golfo Dulce, Puerto Jiménez',phone:'+506 8936 8113',whatsapp:'50689368113',hours:'09:00–18:00; confirmar'},
{id:9,name:'Hellen’s Chill House',category:'comida',icon:'☕',desc:'Cafetería en Puerto Jiménez.',address:'GMPV+JM8, Puerto Jiménez, Puntarenas',phone:'+506 8359 5203',whatsapp:'50683595203',hours:'Consultar horario actual'},
{id:10,name:'Jade Luna',category:'comida',icon:'🍨',desc:'Helados artesanales elaborados en pequeños lotes con ingredientes locales.',address:'Pueblo Viejo, Puerto Jiménez, Puntarenas',phone:'+506 8500 4733',whatsapp:'50685004733',hours:'Consultar disponibilidad'},
{id:11,name:'Heladería Buen Rollo',category:'comida',icon:'🍦',desc:'Heladería de rollos de helado preparados con frutas y sabores variados.',address:'Puerto Jiménez 60702, Puntarenas',phone:'+506 8640 3635',whatsapp:'50686403635',hours:'Aprox. 11:00–22:00; confirmar'},
{id:12,name:'La Cofficina',category:'comida',icon:'☕',desc:'Cafetería, crepería y bar con opciones vegetarianas.',address:'Ruta 245, 50 m de Bomba Osa, Puerto Jiménez',phone:'+506 8355 2531',whatsapp:'50683552531',hours:'09:00–21:00; confirmar'},

{id:20,name:'Cabinas Jiménez',category:'hospedaje',icon:'🏨',desc:'Hotel frente al Golfo Dulce con piscina y uso de kayaks y bicicletas.',address:'Puerto Jiménez, Puntarenas',phone:'+506 2735 5090',whatsapp:'',hours:'Consultar recepción',featured:true},
{id:21,name:'Aparthotel Herrera',category:'hospedaje',icon:'🏨',desc:'Aparthotel cerca del centro de Puerto Jiménez.',address:'50 m este del Banco Nacional, Puerto Jiménez',phone:'',whatsapp:'',hours:'Consultar recepción'},
{id:22,name:'Corcovado Beach Lodge',category:'hospedaje',icon:'🌴',desc:'Lodge en Puerto Jiménez para explorar la Península de Osa.',address:'GPQ2+P38, Puerto Jiménez, Puntarenas',phone:'+506 2735 6000',whatsapp:'',hours:'Consultar recepción'},
{id:23,name:'Cabinas Marcelina',category:'hospedaje',icon:'🛏️',desc:'Cabinas en el centro de Puerto Jiménez.',address:'GMPV+CQW, Puerto Jiménez, Puntarenas',phone:'+506 2735 5007',whatsapp:'',hours:'Consultar recepción'},
{id:24,name:'Cabinas The Corner',category:'hospedaje',icon:'🛏️',desc:'Hospedaje con habitaciones privadas y compartidas.',address:'50 m oeste de la Fiscalía, Puerto Jiménez',phone:'+506 2735 5328',whatsapp:'',hours:'Consultar recepción'},
{id:25,name:'Cabinas Backpacker',category:'hospedaje',icon:'🎒',desc:'Hostel familiar con Wi-Fi, estacionamiento, cocina compartida y habitaciones con aire acondicionado.',address:'150 m oeste de la parada de bus, Puerto Jiménez',phone:'',whatsapp:'',hours:'Check-in reportado 12:00–23:00'},
{id:26,name:'Cabinas El Perezoso',category:'hospedaje',icon:'🦥',desc:'Cabinas tranquilas cerca de los principales transportes del centro.',address:'Centro de Puerto Jiménez, Puntarenas',phone:'',whatsapp:'',hours:'Consultar recepción'},
{id:27,name:'Cabinas Refugio Turístico',category:'hospedaje',icon:'🏡',desc:'Hotel pequeño con parqueo y zonas verdes en el centro.',address:'50 m oeste de oficinas del ICE, Puerto Jiménez',phone:'+506 2735 5079',whatsapp:'',hours:'Consultar recepción'},
{id:28,name:'La Palapa Hut Nature Hostel',category:'hospedaje',icon:'🌿',desc:'Hostel de naturaleza cerca del aeródromo.',address:'150 m oeste del aeródromo, Puerto Jiménez',phone:'+506 2735 5002',whatsapp:'',hours:'Consultar recepción'},
{id:29,name:'Tropical Paradise',category:'hospedaje',icon:'🌴',desc:'Hostel en Puerto Jiménez.',address:'GPJ3+WVC, Puerto Jiménez, Puntarenas',phone:'',whatsapp:'',hours:'Consultar recepción'},
{id:30,name:'Casa Celeste del Golfo Dulce',category:'hospedaje',icon:'🏠',desc:'Bed & breakfast familiar en el sector del aeropuerto.',address:'Aeropuerto, Puerto Jiménez 60702',phone:'+506 8881 1736',whatsapp:'50688811736',hours:'Consultar recepción'},

{id:40,name:'Corcovado Tours',category:'turismo',icon:'🦜',desc:'Operador local de tours y experiencias en Corcovado.',address:'Calle al Manglar, Puerto Jiménez',phone:'+506 8432 8686',whatsapp:'50684328686',hours:'07:00–19:00; confirmar',featured:true},
{id:41,name:'Corcovado Wild Tours',category:'turismo',icon:'🐾',desc:'Operador turístico y agencia de experiencias de naturaleza.',address:'300 m sur del Muelle Público, Puerto Jiménez',phone:'+506 8450 6783',whatsapp:'50684506783',hours:'Servicio reportado 24 horas',featured:true},
{id:42,name:'Rainforest Chronicles',category:'turismo',icon:'📷',desc:'Experiencias de fauna, aves, fotografía y expediciones en Corcovado.',address:'Monterrey de Cañaza, Puerto Jiménez',phone:'+506 8843 2896',whatsapp:'50688432896',hours:'Consultar disponibilidad'},
{id:43,name:'Eco Expeditions CR',category:'turismo',icon:'🥾',desc:'Tours de naturaleza y experiencias en la Península de Osa.',address:'Urbanización El Colegio, Puerto Jiménez',phone:'+506 8725 8081',whatsapp:'50687258081',hours:'Consultar disponibilidad'},
{id:44,name:'Ikara Explore',category:'turismo',icon:'🛶',desc:'Kayak, manglar, amaneceres y bioluminiscencia en Golfo Dulce.',address:'Corcovado Beach Lodge, Puerto Jiménez',phone:'+506 8763 0057',whatsapp:'50687630057',hours:'08:00–20:00; confirmar'},
{id:45,name:'Kendry Tours',category:'turismo',icon:'🚤',desc:'Paseos en bote y experiencias acuáticas.',address:'200 m suroeste de Grupo Materiales, Puerto Jiménez',phone:'+506 8642 5203',whatsapp:'50686425203',hours:'09:00–18:00; confirmar'},
{id:46,name:'Blessing Tours Puerto Jiménez',category:'turismo',icon:'🐬',desc:'Pesca, delfines, snorkel y experiencias en Golfo Dulce.',address:'Puerto Jiménez, Puntarenas',phone:'+506 8834 3290',whatsapp:'50688343290',hours:'07:00–17:00; confirmar'},
{id:47,name:'Costa Rica Wild Expeditions',category:'turismo',icon:'🌳',desc:'Empresa local con guías certificados y experiencias desde Puerto Jiménez.',address:'Puerto Jiménez, Puntarenas',phone:'+506 8817 3293',whatsapp:'50688173293',hours:'08:00–17:00; confirmar'},
{id:48,name:'Osa Birders Tours',category:'turismo',icon:'🦜',desc:'Agencia especializada en tours y observación de aves.',address:'200 m sur de BM Corcovado, Puerto Jiménez',phone:'+506 8675 0841',whatsapp:'50686750841',hours:'08:00–17:00; confirmar'},
{id:49,name:'Aventuras Tropicales Golfo Dulce',category:'turismo',icon:'🛶',desc:'Operador de tours y club de canoa y kayak.',address:'Calle a Pueblo Viejo, Puerto Jiménez',phone:'+506 2735 5195',whatsapp:'',hours:'Consultar disponibilidad'},
{id:50,name:'Costa Rica Travel Tour',category:'turismo',icon:'🌿',desc:'Operador de experiencias turísticas en la zona de Puerto Jiménez.',address:'Urbanización Fauri, sector Bomba Osa, Puerto Jiménez',phone:'+506 8760 1392',whatsapp:'50687601392',hours:'06:00–22:00; confirmar'},
{id:51,name:'Jelkins',category:'turismo',icon:'🥾',desc:'Operador de actividades y tours en Puerto Jiménez.',address:'Bambú, Calle 5, Puerto Jiménez 60702',phone:'+506 8987 2176',whatsapp:'50689872176',hours:'Consultar disponibilidad'},

{id:60,name:'Supermercado BM Corcovado',category:'compras',icon:'🛒',desc:'Sucursal oficial de Supermercados BM con compras en tienda y pickup.',address:'Puerto Jiménez, Puntarenas',phone:'+506 6224 9605',whatsapp:'',hours:'Lun-Sáb 07:00–21:00; Dom 08:00–20:00',featured:true},
{id:61,name:'Palí Puerto Jiménez',category:'compras',icon:'🛒',desc:'Supermercado en Puerto Jiménez.',address:'Puerto Jiménez, Puntarenas',phone:'+506 800 800 0722',whatsapp:'',hours:'Consultar horario actual',featured:true},
{id:62,name:'Mima Market',category:'compras',icon:'🛒',desc:'Supermercado en Aeropuerto Oeste.',address:'Aeropuerto Oeste, Puerto Jiménez',phone:'+506 2735 5033',whatsapp:'',hours:'Lun-Sáb 08:00–21:00; Dom 09:00–18:00'},
{id:63,name:'Súper Corcovado',category:'compras',icon:'🛒',desc:'Supermercado local sobre la Ruta 245.',address:'Ruta 245, Puerto Jiménez',phone:'+506 2735 5009',whatsapp:'',hours:'Consultar horario actual'},
{id:64,name:'Mini Súper Paula',category:'compras',icon:'🛒',desc:'Mini supermercado local.',address:'Ruta 245, Puerto Jiménez',phone:'',whatsapp:'',hours:'Consultar horario actual'},
{id:65,name:'Mini Súper JD',category:'compras',icon:'🛒',desc:'Mini supermercado en el sector de Agujas.',address:'Ruta 245, Agujas, Puerto Jiménez',phone:'+506 8344 6508',whatsapp:'50683446508',hours:'Consultar horario actual'},
{id:66,name:'Mini Súper Karina',category:'compras',icon:'🛒',desc:'Mini supermercado de la zona de Puerto Jiménez.',address:'Puerto Jiménez, Puntarenas',phone:'+506 8833 8485',whatsapp:'50688338485',hours:'Consultar horario actual'},
{id:67,name:'Mini Súper El Buen Precio',category:'compras',icon:'🛒',desc:'Comercio de abarrotes en el cantón de Puerto Jiménez.',address:'Ruta 245, cantón de Puerto Jiménez',phone:'',whatsapp:'',hours:'Consultar horario actual'},
{id:68,name:'Mini Súper El Ahorro',category:'compras',icon:'🛒',desc:'Supermercado local listado en directorios comerciales de Puerto Jiménez.',address:'Puerto Jiménez 60718, Puntarenas',phone:'+506 2735 1591',whatsapp:'',hours:'Consultar horario actual'},
{id:69,name:'El Mercadito de Osa',category:'compras',icon:'🥬',desc:'Frutería y verdulería local.',address:'Avenida 1, Puerto Jiménez',phone:'+506 2735 5460',whatsapp:'',hours:'Consultar horario actual'},
{id:70,name:'Monge Puerto Jiménez',category:'compras',icon:'📱',desc:'Electrodomésticos, tecnología, muebles y artículos para el hogar.',address:'150 m sur del Banco Nacional, Puerto Jiménez',phone:'+506 4032 4803',whatsapp:'50670217100',hours:'Consultar horario actual'},
{id:71,name:'Zapatería Mary',category:'compras',icon:'👟',desc:'Tienda local de ropa y calzado.',address:'GMQV+W72, Puerto Jiménez',phone:'+506 8995 2266',whatsapp:'50689952266',hours:'Consultar horario actual'},
{id:72,name:'La Casite de Osa',category:'compras',icon:'👕',desc:'Tienda de ropa en Puerto Jiménez.',address:'Calle Central, Puerto Jiménez',phone:'',whatsapp:'',hours:'Consultar horario actual'},
{id:73,name:'Lakos Surf Shop',category:'compras',icon:'🏄',desc:'Tienda de surf y ropa.',address:'Calle 2, Puerto Jiménez',phone:'',whatsapp:'',hours:'Consultar horario actual'},
{id:74,name:'Tienda y Zapatería El Regalón',category:'compras',icon:'🛍️',desc:'Tienda y zapatería sobre Calle Central.',address:'Calle Central, Puerto Jiménez',phone:'',whatsapp:'',hours:'Consultar horario actual'},
{id:75,name:'Sacred Nature',category:'compras',icon:'🎁',desc:'Tienda de regalos y artículos locales.',address:'Avenida 0, Puerto Jiménez',phone:'',whatsapp:'',hours:'Consultar horario actual'},
{id:76,name:'Pago de Servicios y Recargas El Pelón',category:'servicios',icon:'💳',desc:'Pago de servicios y recargas en Puerto Jiménez.',address:'Ruta 245, Puerto Jiménez',phone:'+506 8833 9881',whatsapp:'50688339881',hours:'Consultar horario actual'},

{id:80,name:'Colono Construcción Puerto Jiménez',category:'servicios',icon:'🔨',desc:'Materiales de construcción, ferretería, electricidad, iluminación y herramientas.',address:'A un costado de Bomba Osa, Puerto Jiménez',phone:'+506 2735 5703',whatsapp:'',hours:'Consultar horario actual',featured:true},
{id:81,name:'Ferretería Cerro de Oro',category:'servicios',icon:'🔧',desc:'Ferretería en la zona de Puerto Jiménez.',address:'Ruta 245, Puerto Jiménez',phone:'',whatsapp:'',hours:'Consultar horario actual'},
{id:82,name:'Banco Nacional • Puerto Jiménez',category:'servicios',icon:'🏦',desc:'Sucursal bancaria en Puerto Jiménez.',address:'Ruta 245, Puerto Jiménez',phone:'+506 2735 5020',whatsapp:'',hours:'Consultar horario actual'},
{id:83,name:'Banco de Costa Rica • Puerto Jiménez',category:'servicios',icon:'🏦',desc:'Sucursal del Banco de Costa Rica.',address:'Costado sur de la Iglesia Católica, Puerto Jiménez',phone:'+506 2211 1111',whatsapp:'',hours:'Consultar horario actual'},

{id:90,name:'Bomba Osa',category:'transporte',icon:'⛽',desc:'Estación de servicio y combustible en Puerto Jiménez.',address:'Calle del Colegio, Puerto Jiménez',phone:'+506 2735 5446',whatsapp:'',hours:'Consultar horario actual',featured:true},
{id:91,name:'Alamo Car Rental',category:'transporte',icon:'🚙',desc:'Alquiler de vehículos frente al aeropuerto.',address:'Frente al Aeropuerto de Puerto Jiménez',phone:'+506 2735 5175',whatsapp:'',hours:'08:00–17:00; confirmar'},
{id:92,name:'National Car Rental',category:'transporte',icon:'🚗',desc:'Alquiler de vehículos frente al aeropuerto.',address:'Frente al Aeropuerto de Puerto Jiménez',phone:'+506 2735 5175',whatsapp:'',hours:'Consultar horario actual'},
{id:93,name:'Enterprise Rent-A-Car',category:'transporte',icon:'🚘',desc:'Agencia de alquiler de vehículos frente al aeropuerto.',address:'Airport Street, frente al Aeropuerto de Puerto Jiménez',phone:'+506 2735 5175',whatsapp:'',hours:'08:00–17:00; confirmar'},

{id:100,name:'Farmacia Puerto Jiménez / Hidalgo',category:'salud',icon:'💊',desc:'Farmacia local en el centro.',address:'Calle Central / Ruta 245, Puerto Jiménez',phone:'+506 2735 5564',whatsapp:'',hours:'Consultar horario actual'},
{id:101,name:'Farmacia',category:'salud',icon:'💊',desc:'Farmacia registrada en directorios cartográficos de Puerto Jiménez.',address:'GMPV+2R3, Puerto Jiménez',phone:'',whatsapp:'',hours:'Consultar horario actual'},
{id:102,name:'Clínica CCSS Puerto Jiménez',category:'salud',icon:'🏥',desc:'Centro de atención de la Caja Costarricense de Seguro Social.',address:'Avenida 7, Puerto Jiménez',phone:'',whatsapp:'',hours:'Consultar horario de atención'},
{id:103,name:'Oktara Massage & Aromatherapy',category:'salud',icon:'💆',desc:'Masajes y aromaterapia en Puerto Jiménez.',address:'200 m oeste entrada Balsa 2, sector BM Corcovado, Puerto Jiménez',phone:'+506 8992 5852',whatsapp:'50689925852',hours:'09:00–19:00; confirmar'},

{id:110,name:'Aeropuerto de Puerto Jiménez',category:'otros',icon:'✈️',desc:'Aeropuerto local de Puerto Jiménez.',address:'Puerto Jiménez, Puntarenas',phone:'',whatsapp:'',hours:'Según itinerarios de vuelos'}
];


/* ============================================================
   Lógica de la interfaz — favoritos, mapa, vistas y render.
   ============================================================ */
let activeCategory='all';
let currentView='list';
let showFavsOnly=false;

const FAV_KEY='pj_favoritos';
let favs=new Set(JSON.parse(localStorage.getItem(FAV_KEY)||'[]'));
function saveFavs(){localStorage.setItem(FAV_KEY,JSON.stringify([...favs]));}
function toggleFav(id){if(favs.has(id)){favs.delete(id);}else{favs.add(id);}saveFavs();}

const el=id=>document.getElementById(id);
const normalize=s=>(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
const catName=id=>categories.find(c=>c.id===id)?.name||'Otro';
const catIcon=id=>categories.find(c=>c.id===id)?.icon||'📍';
const hueOf=id=>{const i=categories.findIndex(c=>c.id===id);return i<0?0:i%3;};

function showToast(msg){
  const t=el('toast');
  t.textContent=msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer=setTimeout(()=>t.classList.remove('show'),2200);
}

function scrollToListings(){
  const section=el('listingsSection');
  const bar=document.querySelector('.filter-bar-sticky');
  const offset=(bar?bar.offsetHeight:0)+14;
  const top=section.getBoundingClientRect().top+window.scrollY-offset;
  window.scrollTo({top,behavior:'smooth'});
}

function updateScrollFades(){
  const wrap=document.querySelector('.pill-scroll-wrap');
  const track=el('categoryGrid');
  if(!wrap||!track)return;
  const canRight=track.scrollWidth-track.clientWidth-track.scrollLeft>4;
  const canLeft=track.scrollLeft>4;
  wrap.classList.toggle('can-scroll-right',canRight);
  wrap.classList.toggle('can-scroll-left',canLeft);
}

function renderCategories(){
  const total=businesses.length;
  const pills=[`<button class="cat-pill hue-2 ${activeCategory==='all'?'active':''}" data-cat="all"><span class="ic">🌴</span>Todos</button>`]
    .concat(categories.map((c,i)=>`<button class="cat-pill hue-${i%3} ${activeCategory===c.id?'active':''}" data-cat="${c.id}"><span class="ic">${c.icon}</span>${c.name}</button>`));
  el('categoryGrid').innerHTML=`<button class="cat-pill fav-pill ${showFavsOnly?'active':''}" id="favToggleBtn"><span class="ic">❤️</span>Favoritos</button>`+pills.join('');
  document.querySelectorAll('[data-cat]').forEach(btn=>btn.addEventListener('click',()=>{
    activeCategory=btn.dataset.cat;
    renderCategories();
    renderBusinesses();
    scrollToListings();
  }));
  el('favToggleBtn').addEventListener('click',()=>{
    showFavsOnly=!showFavsOnly;
    renderCategories();
    renderBusinesses();
    scrollToListings();
  });
  el('categoryCount').textContent=categories.length;
  void total;
  updateScrollFades();
}

function filtered(){
  const q=normalize(el('searchInput').value);
  return businesses.filter(b=>{
    const inCat=activeCategory==='all'||b.category===activeCategory;
    const inFav=!showFavsOnly||favs.has(b.id);
    const hay=normalize(`${b.name} ${b.desc} ${catName(b.category)} ${b.address}`).includes(q);
    return inCat&&inFav&&hay;
  });
}

function businessCard(b){
  const hue=hueOf(b.category);
  const isFav=favs.has(b.id);
  const stamp=b.featured?`<div class="stamp-badge"><span>★<br>Local</span></div>`:'';
  const waQuick=b.whatsapp?`<a class="wa-quick" target="_blank" rel="noopener" href="https://wa.me/${b.whatsapp.replace(/\D/g,'')}" aria-label="Escribir por WhatsApp" title="WhatsApp">💬</a>`:'';
  return `<article class="business-card" style="animation-delay:${Math.min(businesses.indexOf(b)%12*0.03,.3)}s">
    <div class="card-strip hue-${hue}"></div>
    <div class="business-cover hue-${hue}">${b.icon}
      <button class="fav-btn ${isFav?'is-fav':''}" data-fav="${b.id}" aria-label="Guardar en favoritos">${isFav?'❤️':'🤍'}</button>
      ${stamp}
    </div>
    <div class="business-body">
      <h3 class="business-title">${b.name}</h3>
      <p class="business-desc">${b.desc}</p>
      <div class="meta"><span>${catName(b.category)}</span><span>📍 ${b.address}</span></div>
      <div class="card-actions">
        <button class="details-btn" data-id="${b.id}">Ver ficha</button>
        <a class="map-btn" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.name+' '+b.address)}">Mapa</a>
      </div>
    </div>
    ${waQuick}
  </article>`;
}

function renderListView(list){
  el('businessGrid').innerHTML=list.map(businessCard).join('');
  document.querySelectorAll('.details-btn').forEach(btn=>btn.addEventListener('click',()=>openBusiness(Number(btn.dataset.id))));
  document.querySelectorAll('[data-fav]').forEach(btn=>btn.addEventListener('click',e=>{
    e.stopPropagation();
    const id=Number(btn.dataset.fav);
    toggleFav(id);
    const nowFav=favs.has(id);
    btn.textContent=nowFav?'❤️':'🤍';
    btn.classList.toggle('is-fav',nowFav);
    showToast(nowFav?'Agregado a favoritos ❤️':'Quitado de favoritos');
    if(showFavsOnly)renderBusinesses();
  }));
}

function mapQueryFor(list){
  const q=el('searchInput').value.trim();
  if(q)return `${q} Puerto Jiménez Costa Rica`;
  if(activeCategory!=='all')return `${catName(activeCategory)} Puerto Jiménez Costa Rica`;
  if(showFavsOnly)return 'Puerto Jiménez Costa Rica';
  void list;
  return 'Puerto Jiménez Costa Rica';
}

function renderMapView(list){
  el('mapEmbed').src=`https://www.google.com/maps?q=${encodeURIComponent(mapQueryFor(list))}&output=embed`;
  el('mapList').innerHTML=list.map(b=>`<a class="map-list-item" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.name+' '+b.address)}">
    <span class="ic">${catIcon(b.category)}</span>
    <div><strong>${b.name}</strong><span>${b.address}</span></div>
  </a>`).join('');
}

function renderBusinesses(){
  const list=filtered();
  el('resultLabel').textContent=`${list.length} resultado${list.length===1?'':'s'}`;
  el('resultSub').textContent=showFavsOnly
    ? 'Tus negocios guardados.'
    : (activeCategory==='all' ? 'Explorá todos los negocios registrados en Puerto Jiménez.' : `Categoría: ${catName(activeCategory)}.`);
  el('businessCount').textContent=businesses.length;

  const isMap=currentView==='map';
  el('businessGrid').classList.toggle('hidden',isMap);
  el('mapView').classList.toggle('hidden',!isMap);

  if(isMap){renderMapView(list);}else{renderListView(list);}

  const empty=list.length===0;
  el('emptyState').classList.toggle('hidden',!empty);
  if(empty){
    el('emptyTitle').textContent=showFavsOnly?'Aún no tenés favoritos':'No encontramos nada por acá';
    el('emptyCopy').textContent=showFavsOnly?'Tocá el corazón 🤍 en cualquier negocio para guardarlo acá.':'Probá con otra categoría o borrá la búsqueda.';
  }
}

function openBusiness(id){
  const b=businesses.find(x=>x.id===id);
  if(!b)return;
  const hue=hueOf(b.category);
  const isFav=favs.has(b.id);
  const phone=b.phone?`<div>📞 <a href="tel:${b.phone}">${b.phone}</a></div>`:'';
  const website=b.website?`<div>🌐 <a href="${b.website}" target="_blank" rel="noopener">${b.website.replace(/^https?:\/\//,'')}</a></div>`:'';
  const wa=b.whatsapp?`<a class="wa-link" target="_blank" rel="noopener" href="https://wa.me/${b.whatsapp.replace(/\D/g,'')}">💬 WhatsApp</a>`:'';
  el('dialogContent').innerHTML=`<div class="dialog-hero hue-${hue}">
      <span>${b.icon}</span>
      <button class="dialog-fav" id="dialogFavBtn" data-id="${b.id}" aria-label="Guardar en favoritos">${isFav?'❤️':'🤍'}</button>
    </div>
    <div class="dialog-body">
      <p class="eyebrow" style="color:var(--turquoise-dark)">${catName(b.category)}</p>
      <h2>${b.name}</h2>
      <p class="muted">${b.desc}</p>
      <div class="dialog-list"><div>📍 ${b.address}</div><div>🕒 ${b.hours}</div>${phone}${website}</div>
      <div class="dialog-actions">${wa}<a target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.name+' '+b.address)}">Cómo llegar</a></div>
    </div>`;
  el('dialogFavBtn').addEventListener('click',()=>{
    toggleFav(b.id);
    const nowFav=favs.has(b.id);
    el('dialogFavBtn').textContent=nowFav?'❤️':'🤍';
    showToast(nowFav?'Agregado a favoritos ❤️':'Quitado de favoritos');
  });
  el('businessDialog').showModal();
}

el('closeDialog').addEventListener('click',()=>el('businessDialog').close());
el('businessDialog').addEventListener('click',e=>{if(e.target===el('businessDialog'))el('businessDialog').close();});
el('searchInput').addEventListener('input',renderBusinesses);
el('clearFilters').addEventListener('click',()=>{
  activeCategory='all';
  showFavsOnly=false;
  el('searchInput').value='';
  renderCategories();
  renderBusinesses();
});

el('viewListBtn').addEventListener('click',()=>{
  currentView='list';
  el('viewListBtn').classList.add('active');
  el('viewMapBtn').classList.remove('active');
  renderBusinesses();
});
el('viewMapBtn').addEventListener('click',()=>{
  currentView='map';
  el('viewMapBtn').classList.add('active');
  el('viewListBtn').classList.remove('active');
  renderBusinesses();
});

let deferredPrompt;
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;el('installBtn').classList.remove('hidden');});
el('installBtn').addEventListener('click',async()=>{
  if(!deferredPrompt)return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt=null;
  el('installBtn').classList.add('hidden');
});
if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js'));

el('categoryGrid').addEventListener('scroll',updateScrollFades);
window.addEventListener('resize',updateScrollFades);

renderCategories();
renderBusinesses();
