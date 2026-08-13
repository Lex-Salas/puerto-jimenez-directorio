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
/* ============================================================
   Set de íconos propios (SVG, estilo lineal) — reemplazan emojis.
   ============================================================ */
const ICON_PATHS={
  todos:'<circle cx="12" cy="12" r="9"/><path d="M15 9l-2 6-6 2 2-6 6-2Z"/>',
  fav:'<path fill="currentColor" stroke="none" d="M12 21s-7.5-4.6-10-9.3C.5 8 2.3 4.5 6 4.5c2 0 3.5 1 6 3.5 2.5-2.5 4-3.5 6-3.5 3.7 0 5.5 3.5 4 7.2C19.5 16.4 12 21 12 21Z"/>',
  comida:'<path d="M7 2v7a2 2 0 0 0 2 2v11"/><path d="M7 2v5"/><path d="M11 2v5"/><path d="M17 2c-1.5 0-3 1.5-3 5s1.5 5 3 5v10"/>',
  hospedaje:'<path d="M3 18v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7"/><path d="M3 18v2"/><path d="M21 18v2"/><path d="M3 13h18"/><path d="M7 13V9a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v4"/>',
  turismo:'<path d="M3 19l6-9 4 5 2-3 6 7"/><circle cx="17" cy="6" r="2"/>',
  compras:'<path d="M6 8h12l-1 12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L6 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
  servicios:'<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.8 2.8-2-2 2.8-2.8Z"/>',
  transporte:'<path d="M3 13l1.5-4.5A2 2 0 0 1 6.4 7h11.2a2 2 0 0 1 1.9 1.5L21 13"/><rect x="3" y="13" width="18" height="5" rx="1.5"/><circle cx="7.5" cy="18" r="1.5"/><circle cx="16.5" cy="18" r="1.5"/>',
  salud:'<circle cx="12" cy="12" r="9"/><path d="M8 12h2l1.5-3 2 6L15 12h1"/>',
  otros:'<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z"/><circle cx="12" cy="10" r="2.3"/>',
  supermercados:'<circle cx="9" cy="20" r="1.3"/><circle cx="17" cy="20" r="1.3"/><path d="M3 4h2l2.2 11.5a2 2 0 0 0 2 1.5h7.4a2 2 0 0 0 2-1.6L21 8H6"/>',
  ferreteria:'<path d="M14 6l4 4-2.5 2.5L11 8.5 14 6Z"/><path d="M12.5 9.5 4 18l2 2 8.5-8.5"/>',
  automotriz:'<path d="M4 21V6a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v15"/><path d="M4 21h9"/><path d="M13 10h2l2 2v6a1.5 1.5 0 0 1-3 0v-3h-1"/><path d="M6 6h5"/>',
  belleza:'<path d="M12 3l1.6 4.6L18 9l-4.4 1.4L12 15l-1.6-4.6L6 9l4.4-1.4L12 3Z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z"/>',
  mascotas:'<circle cx="7" cy="9" r="1.6"/><circle cx="12" cy="6.5" r="1.6"/><circle cx="17" cy="9" r="1.6"/><path d="M12 12c-3 0-5 2.2-5 4.4C7 19 9 20 12 20s5-1 5-3.6C17 14.2 15 12 12 12Z"/>'
};
function iconSvg(name,size){
  size=size||20;
  const inner=ICON_PATHS[name]||ICON_PATHS.otros;
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;
}

/* ============================================================
   Traducciones — ES / EN / FR / DE
   ============================================================ */
const CATEGORY_I18N={
  comida:{es:'Comida y cafés',en:'Food & Cafés',fr:'Restauration & Cafés',de:'Essen & Cafés'},
  hospedaje:{es:'Hospedaje',en:'Lodging',fr:'Hébergement',de:'Unterkunft'},
  turismo:{es:'Turismo y tours',en:'Tours & Activities',fr:'Tourisme & Excursions',de:'Touren & Aktivitäten'},
  compras:{es:'Tiendas y compras',en:'Shops & Retail',fr:'Boutiques & Achats',de:'Geschäfte & Einkaufen'},
  servicios:{es:'Servicios',en:'Services',fr:'Services',de:'Dienstleistungen'},
  transporte:{es:'Transporte',en:'Transport',fr:'Transport',de:'Transport'},
  salud:{es:'Salud y bienestar',en:'Health & Wellness',fr:'Santé & Bien-être',de:'Gesundheit & Wellness'},
  otros:{es:'Otros',en:'Other',fr:'Autres',de:'Sonstiges'},
  supermercados:{es:'Supermercados y abarrotes',en:'Supermarkets & Grocery',fr:'Supermarchés & Épicerie',de:'Supermärkte & Lebensmittel'},
  ferreteria:{es:'Ferreterías y construcción',en:'Hardware & Construction',fr:'Quincaillerie & Construction',de:'Baumarkt & Bau'},
  automotriz:{es:'Automotriz y combustible',en:'Automotive & Fuel',fr:'Automobile & Carburant',de:'Auto & Kraftstoff'},
  belleza:{es:'Belleza y bienestar',en:'Beauty & Wellness',fr:'Beauté & Bien-être',de:'Schönheit & Wellness'},
  mascotas:{es:'Mascotas y veterinaria',en:'Pets & Veterinary',fr:'Animaux & Vétérinaire',de:'Haustiere & Tierarzt'}
};

const I18N={
  es:{
    brand_tagline:'Guía local · Osa', install_btn:'Instalar app',
    eyebrow:'Península de Osa, Costa Rica',
    h1_pre:'Todo Puerto Jiménez, a', h1_accent:'un tap',
    hero_copy:'La puerta de entrada a Corcovado tiene su propia guía. Comida, hospedaje, tours, tiendas y servicios reales, hechos por gente de acá.',
    search_placeholder:'Buscá un restaurante, hotel, tour…',
    stat_businesses:'negocios', stat_categories:'categorías', stat_updated:'Actualizado por la comunidad',
    transport_jump:'Ver horarios de transporte', transport_eyebrow:'Movete por la Zona Sur', transport_title:'Horarios de transporte',
    transport_intro:'Buses, vuelos y lancha desde y hacia Puerto Jiménez, reunidos en un solo lugar.', transport_verified:'Verificado el 13 ago 2026',
    transport_disclaimer:'Los horarios pueden cambiar por temporada, clima o decisión del operador. Confirmá antes de salir y llegá con anticipación.',
    transport_intercity_bus:'Bus interurbano', transport_regional_bus:'Bus regional', transport_local_bus:'Bus local · Ruta 644', transport_boat:'Lancha', transport_flights:'Vuelos directos · Aeropuerto SJO',
    transport_daily:'todos los días', transport_no_sunday:'sin servicio los domingos', transport_mon_fri:'Lun–Vie', transport_sat:'Sáb', transport_outbound:'Desde Puerto Jiménez', transport_inbound:'Hacia Puerto Jiménez',
    transport_sj_note:'Duración aproximada: 6–8 horas. Las salidas adicionales dependen de la demanda; confirmá al comprar.',
    transport_neily_note:'Servicio con muchas paradas; reservá suficiente tiempo para el recorrido.', transport_local_note:'Estos son los períodos de operación. Consultá el PDF para ver paradas y próximas salidas.',
    transport_buy_ticket:'Comprar tiquete', transport_view_source:'Ver fuente', transport_route_stops:'Horario y paradas',
    transport_no_official_schedule:'Sin horario oficial confirmado', transport_boat_warning:'ARESEP informa que, al 30 de julio de 2026, la ruta no tiene un operador autorizado por el MOPT. Pueden existir traslados privados, pero no publicamos horas no verificadas.', transport_official_notice:'Ver aviso oficial',
    transport_flight_note:'Vuelo aproximado de 50–55 minutos. Los horarios de SANSA cambian según la fecha; Green Airways publica dos frecuencias por sentido.', transport_published_schedule:'horario publicado', transport_seasonal_schedule:'referencia ago 2026 · varía por fecha', transport_check_book:'Confirmar y reservar ↗',
    pill_all:'Todos', pill_fav:'Favoritos',
    view_list:'Lista', view_map:'Mapa',
    near_me:'Cerca de mí', share:'Compartir', share_success:'Enlace copiado', share_error:'No se pudo compartir el enlace', location_error:'No pudimos acceder a tu ubicación',
    section_default_title:'Descubrí lo local', section_default_sub:'Explorá todos los negocios registrados en Puerto Jiménez.',
    clear_filters:'Limpiar filtros',
    result_singular:'resultado', result_plural:'resultados',
    sub_favorites:'Tus negocios guardados.', sub_category:'Categoría: ',
    empty_title_default:'No encontramos nada por acá', empty_copy_default:'Probá con otra categoría o borrá la búsqueda.',
    empty_title_fav:'Aún no tenés favoritos', empty_copy_fav:'Tocá el corazón 🤍 en cualquier negocio para guardarlo acá.',
    card_details:'Ver ficha', card_map:'Mapa', stamp_word:'Local',
    dialog_directions:'Cómo llegar', dialog_whatsapp:'WhatsApp',
    cta_eyebrow:'¿Tenés un negocio en Puerto Jiménez?', cta_title:'Sumate a la guía, gratis.',
    cta_copy:'Este directorio lo mantiene gente de la comunidad. Si tu negocio no aparece o querés actualizar tus datos, escribinos.',
    cta_button:'Agregar comercio',
    form_eyebrow:'Directorio comunitario', form_title:'Agregá tu comercio', form_intro:'Completá los datos y prepararemos tu solicitud por WhatsApp.',
    form_name:'Nombre del negocio', form_name_placeholder:'Ej. Soda La Amistad', form_name_required:'Escribí el nombre del negocio.', form_location:'Ubicación en Google Maps', form_location_placeholder:'https://maps.app.goo.gl/…',
    form_location_help:'Abrí el lugar en Google Maps, tocá Compartir y copiá el enlace.', form_open_maps:'Abrir Google Maps', form_location_valid:'Ubicación válida en Google Maps ✓', form_location_invalid:'Pegá un enlace válido de Google Maps.',
    form_photos:'Fotos del comercio', form_photos_action:'Elegir fotos', form_photos_help:'De 1 a 5 fotos, máximo 10 MB cada una.', form_photos_selected:'fotos seleccionadas', form_photo_required:'Elegí al menos una foto.', form_photo_limit:'Podés elegir un máximo de 5 fotos.', form_photo_size:'Cada foto debe pesar menos de 10 MB.',
    form_photo_notice:'WhatsApp no permite que una web adjunte archivos automáticamente. Al abrirse el chat, enviá las fotos que acabás de elegir.', form_submit:'Continuar a WhatsApp',
    footer_text:'Puerto Jiménez Guía · Directorio comunitario de la Península de Osa, Costa Rica.',
    toast_added:'Agregado a favoritos ❤️', toast_removed:'Quitado de favoritos',
    lang_note:''
  },
  en:{
    brand_tagline:'Local guide · Osa', install_btn:'Install app',
    eyebrow:'Osa Peninsula, Costa Rica',
    h1_pre:'All of Puerto Jiménez, in', h1_accent:'one tap',
    hero_copy:'The gateway to Corcovado has its own guide. Real food, lodging, tours, shops and services, made by locals.',
    search_placeholder:'Search a restaurant, hotel, tour…',
    stat_businesses:'businesses', stat_categories:'categories', stat_updated:'Updated by the community',
    transport_jump:'See transport schedules', transport_eyebrow:'Travel around the Southern Zone', transport_title:'Transport schedules',
    transport_intro:'Buses, flights and boat service to and from Puerto Jiménez, all in one place.', transport_verified:'Verified Aug 13, 2026',
    transport_disclaimer:'Schedules may change due to season, weather or operator decisions. Confirm before leaving and arrive early.',
    transport_intercity_bus:'Intercity bus', transport_regional_bus:'Regional bus', transport_local_bus:'Local bus · Route 644', transport_boat:'Boat', transport_flights:'Direct flights · SJO Airport',
    transport_daily:'daily', transport_no_sunday:'no Sunday service', transport_mon_fri:'Mon–Fri', transport_sat:'Sat', transport_outbound:'From Puerto Jiménez', transport_inbound:'To Puerto Jiménez',
    transport_sj_note:'Approximate duration: 6–8 hours. Extra departures depend on demand; confirm when purchasing.',
    transport_neily_note:'This service makes many stops; allow enough time for the journey.', transport_local_note:'These are operating windows. Open the PDF for stops and upcoming departures.',
    transport_buy_ticket:'Buy ticket', transport_view_source:'View source', transport_route_stops:'Schedule and stops',
    transport_no_official_schedule:'No confirmed official schedule', transport_boat_warning:'ARESEP reports that, as of July 30, 2026, this route has no MOPT-authorized operator. Private transfers may exist, but we do not publish unverified times.', transport_official_notice:'View official notice',
    transport_flight_note:'Flight time is approximately 50–55 minutes. SANSA times vary by date; Green Airways publishes two flights in each direction.', transport_published_schedule:'published schedule', transport_seasonal_schedule:'Aug 2026 reference · varies by date', transport_check_book:'Confirm and book ↗',
    pill_all:'All', pill_fav:'Favorites',
    view_list:'List', view_map:'Map',
    near_me:'Near me', share:'Share', share_success:'Link copied', share_error:'Could not share the link', location_error:'We could not access your location',
    section_default_title:'Discover local life', section_default_sub:'Explore every business listed in Puerto Jiménez.',
    clear_filters:'Clear filters',
    result_singular:'result', result_plural:'results',
    sub_favorites:'Your saved businesses.', sub_category:'Category: ',
    empty_title_default:"We couldn't find anything", empty_copy_default:'Try another category or clear your search.',
    empty_title_fav:"You don't have any favorites yet", empty_copy_fav:'Tap the 🤍 on any business to save it here.',
    card_details:'View details', card_map:'Map', stamp_word:'Local',
    dialog_directions:'Get directions', dialog_whatsapp:'WhatsApp',
    cta_eyebrow:'Do you own a business in Puerto Jiménez?', cta_title:'Join the guide, for free.',
    cta_copy:"This directory is maintained by the community. If your business isn't listed or you want to update your info, message us.",
    cta_button:'Add a business',
    form_eyebrow:'Community directory', form_title:'Add your business', form_intro:'Complete the details and we will prepare your WhatsApp request.',
    form_name:'Business name', form_name_placeholder:'E.g. Soda La Amistad', form_name_required:'Enter the business name.', form_location:'Google Maps location', form_location_placeholder:'https://maps.app.goo.gl/…',
    form_location_help:'Open the place in Google Maps, tap Share and copy the link.', form_open_maps:'Open Google Maps', form_location_valid:'Valid Google Maps location ✓', form_location_invalid:'Paste a valid Google Maps link.',
    form_photos:'Business photos', form_photos_action:'Choose photos', form_photos_help:'1 to 5 photos, up to 10 MB each.', form_photos_selected:'photos selected', form_photo_required:'Choose at least one photo.', form_photo_limit:'You may choose up to 5 photos.', form_photo_size:'Each photo must be smaller than 10 MB.',
    form_photo_notice:'WhatsApp does not let a website attach files automatically. When the chat opens, send the photos you just selected.', form_submit:'Continue to WhatsApp',
    footer_text:'Puerto Jiménez Guía · A community directory for the Osa Peninsula, Costa Rica.',
    toast_added:'Added to favorites ❤️', toast_removed:'Removed from favorites',
    lang_note:''
  },
  fr:{
    brand_tagline:'Guide local · Osa', install_btn:"Installer l'app",
    eyebrow:'Péninsule d\'Osa, Costa Rica',
    h1_pre:'Tout Puerto Jiménez, en', h1_accent:'un geste',
    hero_copy:"La porte d'entrée de Corcovado a son propre guide. Restaurants, hébergements, excursions, boutiques et services réels, faits par des habitants.",
    search_placeholder:'Cherchez un restaurant, hôtel, excursion…',
    stat_businesses:'commerces', stat_categories:'catégories', stat_updated:'Mis à jour par la communauté',
    transport_jump:'Voir les horaires de transport', transport_eyebrow:'Se déplacer dans la Zone Sud', transport_title:'Horaires de transport',
    transport_intro:'Bus, vols et liaison maritime au départ et à destination de Puerto Jiménez, réunis ici.', transport_verified:'Vérifié le 13 août 2026',
    transport_disclaimer:"Les horaires peuvent changer selon la saison, la météo ou l’opérateur. Confirmez avant de partir et arrivez à l’avance.",
    transport_intercity_bus:'Bus interurbain', transport_regional_bus:'Bus régional', transport_local_bus:'Bus local · Ligne 644', transport_boat:'Bateau', transport_flights:'Vols directs · Aéroport SJO',
    transport_daily:'tous les jours', transport_no_sunday:'aucun service le dimanche', transport_mon_fri:'Lun–Ven', transport_sat:'Sam', transport_outbound:'Depuis Puerto Jiménez', transport_inbound:'Vers Puerto Jiménez',
    transport_sj_note:"Durée approximative : 6 à 8 heures. Les départs supplémentaires dépendent de la demande ; confirmez lors de l’achat.",
    transport_neily_note:'Ce service effectue de nombreux arrêts ; prévoyez assez de temps.', transport_local_note:'Il s’agit des plages de service. Consultez le PDF pour les arrêts et les prochains départs.',
    transport_buy_ticket:'Acheter le billet', transport_view_source:'Voir la source', transport_route_stops:'Horaires et arrêts',
    transport_no_official_schedule:'Aucun horaire officiel confirmé', transport_boat_warning:"Selon l’ARESEP, au 30 juillet 2026, cette liaison n’a pas d’opérateur autorisé par le MOPT. Des transferts privés peuvent exister, mais nous ne publions pas d’horaires non vérifiés.", transport_official_notice:"Voir l’avis officiel",
    transport_flight_note:'Durée du vol : environ 50 à 55 minutes. Les horaires SANSA varient selon la date ; Green Airways publie deux vols par sens.', transport_published_schedule:'horaire publié', transport_seasonal_schedule:'référence août 2026 · varie selon la date', transport_check_book:'Confirmer et réserver ↗',
    pill_all:'Tous', pill_fav:'Favoris',
    view_list:'Liste', view_map:'Carte',
    near_me:'À proximité', share:'Partager', share_success:'Lien copié', share_error:'Impossible de partager le lien', location_error:'Impossible d’accéder à votre position',
    section_default_title:'Découvrez le coin', section_default_sub:'Explorez tous les commerces répertoriés à Puerto Jiménez.',
    clear_filters:'Effacer les filtres',
    result_singular:'résultat', result_plural:'résultats',
    sub_favorites:'Vos commerces enregistrés.', sub_category:'Catégorie : ',
    empty_title_default:"Aucun résultat", empty_copy_default:'Essayez une autre catégorie ou effacez la recherche.',
    empty_title_fav:"Vous n'avez pas encore de favoris", empty_copy_fav:'Touchez le 🤍 sur un commerce pour le sauvegarder ici.',
    card_details:'Voir la fiche', card_map:'Carte', stamp_word:'Local',
    dialog_directions:'Itinéraire', dialog_whatsapp:'WhatsApp',
    cta_eyebrow:'Vous avez un commerce à Puerto Jiménez ?', cta_title:'Rejoignez le guide, gratuitement.',
    cta_copy:"Cet annuaire est tenu par la communauté. Si votre commerce n'apparaît pas ou si vous voulez mettre à jour vos infos, écrivez-nous.",
    cta_button:'Ajouter un commerce',
    form_eyebrow:'Annuaire communautaire', form_title:'Ajoutez votre commerce', form_intro:'Complétez les informations et nous préparerons votre demande WhatsApp.',
    form_name:'Nom du commerce', form_name_placeholder:'Ex. Soda La Amistad', form_name_required:'Saisissez le nom du commerce.', form_location:'Emplacement Google Maps', form_location_placeholder:'https://maps.app.goo.gl/…',
    form_location_help:'Ouvrez le lieu dans Google Maps, touchez Partager et copiez le lien.', form_open_maps:'Ouvrir Google Maps', form_location_valid:'Emplacement Google Maps valide ✓', form_location_invalid:'Collez un lien Google Maps valide.',
    form_photos:'Photos du commerce', form_photos_action:'Choisir des photos', form_photos_help:'De 1 à 5 photos, 10 Mo maximum chacune.', form_photos_selected:'photos sélectionnées', form_photo_required:'Choisissez au moins une photo.', form_photo_limit:'Vous pouvez choisir 5 photos maximum.', form_photo_size:'Chaque photo doit peser moins de 10 Mo.',
    form_photo_notice:"WhatsApp ne permet pas à un site d'ajouter automatiquement des fichiers. À l'ouverture du chat, envoyez les photos choisies.", form_submit:'Continuer sur WhatsApp',
    footer_text:'Puerto Jiménez Guía · Annuaire communautaire de la péninsule d\'Osa, Costa Rica.',
    toast_added:'Ajouté aux favoris ❤️', toast_removed:'Retiré des favoris',
    lang_note:''
  },
  de:{
    brand_tagline:'Lokaler Guide · Osa', install_btn:'App installieren',
    eyebrow:'Osa-Halbinsel, Costa Rica',
    h1_pre:'Ganz Puerto Jiménez, in', h1_accent:'einem Klick',
    hero_copy:'Das Tor zum Corcovado hat seinen eigenen Guide. Echte Restaurants, Unterkünfte, Touren, Geschäfte und Dienstleistungen von Einheimischen.',
    search_placeholder:'Restaurant, Hotel, Tour suchen…',
    stat_businesses:'Einträge', stat_categories:'Kategorien', stat_updated:'Von der Gemeinschaft aktualisiert',
    transport_jump:'Fahrpläne ansehen', transport_eyebrow:'Unterwegs in der Südregion', transport_title:'Verkehrsfahrpläne',
    transport_intro:'Busse, Flüge und Bootsverbindung von und nach Puerto Jiménez an einem Ort.', transport_verified:'Geprüft am 13. Aug. 2026',
    transport_disclaimer:'Fahrpläne können sich je nach Saison, Wetter oder Betreiber ändern. Vor der Abfahrt bestätigen und frühzeitig ankommen.',
    transport_intercity_bus:'Fernbus', transport_regional_bus:'Regionalbus', transport_local_bus:'Lokaler Bus · Linie 644', transport_boat:'Boot', transport_flights:'Direktflüge · Flughafen SJO',
    transport_daily:'täglich', transport_no_sunday:'sonntags kein Betrieb', transport_mon_fri:'Mo–Fr', transport_sat:'Sa', transport_outbound:'Ab Puerto Jiménez', transport_inbound:'Nach Puerto Jiménez',
    transport_sj_note:'Ungefähre Fahrzeit: 6–8 Stunden. Zusätzliche Abfahrten richten sich nach der Nachfrage; beim Kauf bestätigen.',
    transport_neily_note:'Dieser Bus hält sehr häufig; genügend Reisezeit einplanen.', transport_local_note:'Dies sind die Betriebszeiträume. Haltestellen und nächste Abfahrten stehen im PDF.',
    transport_buy_ticket:'Ticket kaufen', transport_view_source:'Quelle ansehen', transport_route_stops:'Fahrplan und Haltestellen',
    transport_no_official_schedule:'Kein bestätigter offizieller Fahrplan', transport_boat_warning:'Laut ARESEP hat diese Route zum 30. Juli 2026 keinen vom MOPT zugelassenen Betreiber. Private Transfers können angeboten werden; ungeprüfte Zeiten veröffentlichen wir nicht.', transport_official_notice:'Offiziellen Hinweis ansehen',
    transport_flight_note:'Flugzeit etwa 50–55 Minuten. SANSA-Zeiten variieren je nach Datum; Green Airways veröffentlicht zwei Flüge je Richtung.', transport_published_schedule:'veröffentlichter Fahrplan', transport_seasonal_schedule:'Referenz Aug. 2026 · je nach Datum', transport_check_book:'Bestätigen und buchen ↗',
    pill_all:'Alle', pill_fav:'Favoriten',
    view_list:'Liste', view_map:'Karte',
    near_me:'In der Nähe', share:'Teilen', share_success:'Link kopiert', share_error:'Link konnte nicht geteilt werden', location_error:'Standort konnte nicht abgerufen werden',
    section_default_title:'Entdecke die Gegend', section_default_sub:'Alle Einträge in Puerto Jiménez erkunden.',
    clear_filters:'Filter zurücksetzen',
    result_singular:'Ergebnis', result_plural:'Ergebnisse',
    sub_favorites:'Deine gespeicherten Einträge.', sub_category:'Kategorie: ',
    empty_title_default:'Nichts gefunden', empty_copy_default:'Probiere eine andere Kategorie oder lösche die Suche.',
    empty_title_fav:'Noch keine Favoriten', empty_copy_fav:'Tippe auf das 🤍 bei einem Eintrag, um ihn hier zu speichern.',
    card_details:'Details ansehen', card_map:'Karte', stamp_word:'Lokal',
    dialog_directions:'Route anzeigen', dialog_whatsapp:'WhatsApp',
    cta_eyebrow:'Hast du ein Geschäft in Puerto Jiménez?', cta_title:'Kostenlos zum Guide hinzufügen.',
    cta_copy:'Dieses Verzeichnis wird von der Gemeinschaft gepflegt. Falls dein Geschäft fehlt oder du deine Daten aktualisieren möchtest, schreib uns.',
    cta_button:'Unternehmen hinzufügen',
    form_eyebrow:'Gemeinschaftsverzeichnis', form_title:'Unternehmen hinzufügen', form_intro:'Fülle die Angaben aus; wir bereiten deine WhatsApp-Anfrage vor.',
    form_name:'Name des Unternehmens', form_name_placeholder:'Z. B. Soda La Amistad', form_name_required:'Gib den Namen des Unternehmens ein.', form_location:'Standort in Google Maps', form_location_placeholder:'https://maps.app.goo.gl/…',
    form_location_help:'Öffne den Ort in Google Maps, tippe auf Teilen und kopiere den Link.', form_open_maps:'Google Maps öffnen', form_location_valid:'Gültiger Google-Maps-Standort ✓', form_location_invalid:'Füge einen gültigen Google-Maps-Link ein.',
    form_photos:'Fotos des Unternehmens', form_photos_action:'Fotos auswählen', form_photos_help:'1 bis 5 Fotos, jeweils maximal 10 MB.', form_photos_selected:'Fotos ausgewählt', form_photo_required:'Wähle mindestens ein Foto aus.', form_photo_limit:'Du kannst maximal 5 Fotos auswählen.', form_photo_size:'Jedes Foto muss kleiner als 10 MB sein.',
    form_photo_notice:'WhatsApp erlaubt Webseiten nicht, Dateien automatisch anzuhängen. Sende die ausgewählten Fotos, sobald sich der Chat öffnet.', form_submit:'Weiter zu WhatsApp',
    footer_text:'Puerto Jiménez Guía · Gemeinschaftsverzeichnis der Osa-Halbinsel, Costa Rica.',
    toast_added:'Zu Favoriten hinzugefügt ❤️', toast_removed:'Von Favoriten entfernt',
    lang_note:''
  }
};

let currentLang=localStorage.getItem('pj_lang')||(navigator.language||'es').slice(0,2).toLowerCase();
if(!I18N[currentLang])currentLang='es';

function t(key){return (I18N[currentLang]&&I18N[currentLang][key])??I18N.es[key]??key;}

function applyStaticI18n(){
  document.documentElement.lang=currentLang;
  document.querySelectorAll('[data-i18n]').forEach(elm=>{elm.textContent=t(elm.dataset.i18n);});
  document.querySelectorAll('[data-i18n-placeholder]').forEach(elm=>{elm.placeholder=t(elm.dataset.i18nPlaceholder);});
  el('heroH1Pre').textContent=t('h1_pre');
  el('heroH1Accent').textContent=t('h1_accent');
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active',b.dataset.lang===currentLang));
}

function setLang(lang){
  currentLang=I18N[lang]?lang:'es';
  localStorage.setItem('pj_lang',currentLang);
  applyStaticI18n();
  renderCategories();
  renderBusinesses();
}

let activeCategory='all';
let currentView='list';
let showFavsOnly=false;

const FAV_KEY='pj_favoritos';
let favs=new Set(JSON.parse(localStorage.getItem(FAV_KEY)||'[]'));
function saveFavs(){localStorage.setItem(FAV_KEY,JSON.stringify([...favs]));}
function toggleFav(id){if(favs.has(id)){favs.delete(id);}else{favs.add(id);}saveFavs();}

const el=id=>document.getElementById(id);
const normalize=s=>(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
const escapeHtml=s=>String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const businessSlug=b=>normalize(b.name).replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const businessUrl=b=>`${location.origin}${location.pathname}#negocio=${encodeURIComponent(businessSlug(b))}`;
const catName=id=>{const tr=CATEGORY_I18N[id];return (tr&&tr[currentLang])||categories.find(c=>c.id===id)?.name||id;};
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
  const pills=[`<button class="cat-pill hue-2 ${activeCategory==='all'?'active':''}" data-cat="all"><span class="ic">${iconSvg('todos',16)}</span>${t('pill_all')}</button>`]
    .concat(categories.map((c,i)=>`<button class="cat-pill hue-${i%3} ${activeCategory===c.id?'active':''}" data-cat="${c.id}"><span class="ic">${iconSvg(c.id,16)}</span>${catName(c.id)}</button>`));
  el('categoryGrid').innerHTML=`<button class="cat-pill fav-pill ${showFavsOnly?'active':''}" id="favToggleBtn"><span class="ic">${iconSvg('fav',15)}</span>${t('pill_fav')}</button>`+pills.join('');
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
  const stamp=b.featured?`<div class="stamp-badge"><span>★<br>${t('stamp_word')}</span></div>`:'';
  const waQuick=b.whatsapp?`<a class="wa-quick" target="_blank" rel="noopener" href="https://wa.me/${b.whatsapp.replace(/\D/g,'')}" aria-label="Escribir por WhatsApp" title="WhatsApp">💬</a>`:'';
  return `<article class="business-card" style="animation-delay:${Math.min(businesses.indexOf(b)%12*0.03,.3)}s">
    <div class="card-strip hue-${hue}"></div>
    <div class="business-cover hue-${hue}"><span class="cover-icon">${iconSvg(b.category,42)}</span>
      <button class="fav-btn ${isFav?'is-fav':''}" data-fav="${b.id}" aria-label="Guardar en favoritos">${isFav?'❤️':'🤍'}</button>
      ${stamp}
    </div>
    <div class="business-body">
      <h3 class="business-title">${escapeHtml(b.name)}</h3>
      <p class="business-desc">${escapeHtml(b.desc)}</p>
      <div class="meta"><span>${escapeHtml(catName(b.category))}</span><span>📍 ${escapeHtml(b.address)}</span></div>
      <div class="card-actions">
        <button class="details-btn" data-id="${b.id}">${t('card_details')}</button>
        <a class="map-btn" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.name+' '+b.address)}">${t('card_map')}</a>
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
    showToast(nowFav?t('toast_added'):t('toast_removed'));
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
    <span class="ic">${iconSvg(b.category,18)}</span>
    <div><strong>${b.name}</strong><span>${b.address}</span></div>
  </a>`).join('');
}

function renderBusinesses(){
  const list=filtered();
  el('resultLabel').textContent=`${list.length} ${list.length===1?t('result_singular'):t('result_plural')}`;
  el('resultSub').textContent=showFavsOnly
    ? t('sub_favorites')
    : (activeCategory==='all' ? t('section_default_sub') : `${t('sub_category')}${catName(activeCategory)}.`);
  el('businessCount').textContent=businesses.length;

  const isMap=currentView==='map';
  el('businessGrid').classList.toggle('hidden',isMap);
  el('mapView').classList.toggle('hidden',!isMap);

  if(isMap){renderMapView(list);}else{renderListView(list);}

  const empty=list.length===0;
  el('emptyState').classList.toggle('hidden',!empty);
  if(empty){
    el('emptyTitle').textContent=showFavsOnly?t('empty_title_fav'):t('empty_title_default');
    el('emptyCopy').textContent=showFavsOnly?t('empty_copy_fav'):t('empty_copy_default');
  }
}

function openBusiness(id){
  const b=businesses.find(x=>x.id===id);
  if(!b)return;
  const hue=hueOf(b.category);
  const isFav=favs.has(b.id);
  const phone=b.phone?`<div>📞 <a href="tel:${b.phone.replace(/[^+\d]/g,'')}">${escapeHtml(b.phone)}</a></div>`:'';
  const website=b.website?`<div>🌐 <a href="${b.website}" target="_blank" rel="noopener">${b.website.replace(/^https?:\/\//,'')}</a></div>`:'';
  const wa=b.whatsapp?`<a class="wa-link" target="_blank" rel="noopener" href="https://wa.me/${b.whatsapp.replace(/\D/g,'')}">💬 ${t('dialog_whatsapp')}</a>`:'';
  el('dialogContent').innerHTML=`<div class="dialog-hero hue-${hue}">
      <span class="dialog-icon">${iconSvg(b.category,52)}</span>
      <button class="dialog-fav" id="dialogFavBtn" data-id="${b.id}" aria-label="Guardar en favoritos">${isFav?'❤️':'🤍'}</button>
    </div>
    <div class="dialog-body">
      <p class="eyebrow" style="color:var(--turquoise-dark)">${catName(b.category)}</p>
      <h2>${escapeHtml(b.name)}</h2>
      <p class="muted">${escapeHtml(b.desc)}</p>
      <div class="dialog-list"><div>📍 ${escapeHtml(b.address)}</div><div>🕒 ${escapeHtml(b.hours)}</div>${phone}${website}</div>
      <div class="dialog-actions">${wa}<a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.name+' '+b.address)}">${t('dialog_directions')}</a><button class="share-btn" id="shareBusiness" type="button">↗ ${t('share')}</button></div>
    </div>`;
  el('dialogFavBtn').addEventListener('click',()=>{
    toggleFav(b.id);
    const nowFav=favs.has(b.id);
    el('dialogFavBtn').textContent=nowFav?'❤️':'🤍';
    showToast(nowFav?t('toast_added'):t('toast_removed'));
  });
  el('shareBusiness').addEventListener('click',async()=>{
    const data={title:b.name,text:`${b.name} — Puerto Jiménez Guía`,url:businessUrl(b)};
    try{if(navigator.share)await navigator.share(data);else{await navigator.clipboard.writeText(data.url);showToast(t('share_success'));}}catch(err){if(err.name!=='AbortError')showToast(t('share_error'));}
  });
  history.replaceState(null,'',`#negocio=${encodeURIComponent(businessSlug(b))}`);
  el('businessDialog').showModal();
}

el('closeDialog').addEventListener('click',()=>el('businessDialog').close());
el('businessDialog').addEventListener('click',e=>{if(e.target===el('businessDialog'))el('businessDialog').close();});
el('businessDialog').addEventListener('close',()=>{if(location.hash.startsWith('#negocio='))history.replaceState(null,'',location.pathname+location.search);});
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
el('nearMeBtn').addEventListener('click',()=>{
  if(!navigator.geolocation){showToast(t('location_error'));return;}
  el('nearMeBtn').disabled=true;
  navigator.geolocation.getCurrentPosition(pos=>{
    const {latitude,longitude}=pos.coords;
    window.open(`https://www.google.com/maps/search/negocios/@${latitude},${longitude},15z`,'_blank','noopener,noreferrer');
    el('nearMeBtn').disabled=false;
  },()=>{showToast(t('location_error'));el('nearMeBtn').disabled=false;},{enableHighAccuracy:false,timeout:8000,maximumAge:300000});
});

const businessFormDialog=el('businessFormDialog');
const businessForm=el('businessForm');
const mapsInput=el('businessMapsUrl');
const photosInput=el('businessPhotos');
let photoPreviewUrls=[];

function isGoogleMapsUrl(value){
  try{
    const url=new URL(value);
    const host=url.hostname.toLowerCase();
    const googleHost=host==='google.com'||host.endsWith('.google.com')||/^www\.google\.[a-z.]+$/.test(host);
    return url.protocol==='https:'&&(host==='maps.app.goo.gl'||(host==='goo.gl'&&url.pathname.startsWith('/maps'))||host==='maps.google.com'||(googleHost&&url.pathname.includes('/maps')));
  }catch{return false;}
}

function validateMaps(){
  const value=mapsInput.value.trim();
  const valid=value!==''&&isGoogleMapsUrl(value);
  mapsInput.setCustomValidity(value===''?'':(valid?'':t('form_location_invalid')));
  el('mapsStatus').textContent=value===''?'':t(valid?'form_location_valid':'form_location_invalid');
  el('mapsStatus').classList.toggle('is-valid',valid);
  el('mapsStatus').classList.toggle('is-error',value!==''&&!valid);
  return valid;
}

function clearPhotoPreviews(){
  photoPreviewUrls.forEach(url=>URL.revokeObjectURL(url));
  photoPreviewUrls=[];
  el('photoPreview').replaceChildren();
}

function validatePhotos(){
  const files=[...photosInput.files];
  let error='';
  if(files.length===0)error=t('form_photo_required');
  else if(files.length>5)error=t('form_photo_limit');
  else if(files.some(file=>!file.type.startsWith('image/')||file.size>10*1024*1024))error=t('form_photo_size');
  photosInput.setCustomValidity(error);
  el('photoStatus').textContent=error||`${files.length} ${t('form_photos_selected')} ✓`;
  el('photoStatus').classList.toggle('is-valid',!error&&files.length>0);
  el('photoStatus').classList.toggle('is-error',!!error);
  return !error;
}

function renderPhotoPreviews(){
  clearPhotoPreviews();
  [...photosInput.files].slice(0,5).forEach(file=>{
    const url=URL.createObjectURL(file);
    photoPreviewUrls.push(url);
    const figure=document.createElement('figure');
    const img=document.createElement('img');
    const caption=document.createElement('figcaption');
    img.src=url;
    img.alt=file.name;
    caption.textContent=file.name;
    figure.append(img,caption);
    el('photoPreview').append(figure);
  });
}

el('openBusinessForm').addEventListener('click',()=>businessFormDialog.showModal());
el('closeBusinessForm').addEventListener('click',()=>businessFormDialog.close());
businessFormDialog.addEventListener('click',event=>{if(event.target===businessFormDialog)businessFormDialog.close();});
mapsInput.addEventListener('input',validateMaps);
photosInput.addEventListener('change',()=>{validatePhotos();renderPhotoPreviews();});

businessForm.addEventListener('submit',event=>{
  event.preventDefault();
  const nameInput=el('businessName');
  const name=nameInput.value.trim();
  nameInput.setCustomValidity(name?'':t('form_name_required'));
  const mapsValid=validateMaps();
  const photosValid=validatePhotos();
  if(!name||!mapsValid||!photosValid||!businessForm.reportValidity())return;
  const mapsUrl=mapsInput.value.trim();
  const photoCount=photosInput.files.length;
  const message=`Hola, quiero agregar o actualizar un comercio en Puerto Jiménez Guía.\n\n*Nombre del negocio:* ${name}\n*Ubicación en Google Maps:* ${mapsUrl}\n*Fotos:* Seleccioné ${photoCount} ${photoCount===1?'foto':'fotos'} y las adjuntaré en este chat.`;
  businessFormDialog.close();
  window.open(`https://wa.me/50684794991?text=${encodeURIComponent(message)}`,'_blank','noopener,noreferrer');
});
el('businessName').addEventListener('input',event=>event.currentTarget.setCustomValidity(''));

let deferredPrompt;
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;el('installBtn').classList.remove('hidden');});
el('installBtn').addEventListener('click',async()=>{
  if(!deferredPrompt)return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt=null;
  el('installBtn').classList.add('hidden');
});
if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js?v=10').then(reg=>reg.update()).catch(()=>{}));

el('categoryGrid').addEventListener('scroll',updateScrollFades);
window.addEventListener('resize',updateScrollFades);

document.querySelectorAll('.lang-btn').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));
setLang(currentLang);
window.addEventListener('load',()=>{
  const q=new URLSearchParams(location.search).get('q');
  if(q){el('searchInput').value=q;renderBusinesses();}
  const slug=decodeURIComponent(location.hash.replace(/^#negocio=/,''));
  if(slug){const b=businesses.find(item=>businessSlug(item)===slug);if(b)openBusiness(b.id);}
});
