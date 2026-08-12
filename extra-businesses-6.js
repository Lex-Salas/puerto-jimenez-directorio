if(!categories.some(c=>c.id==='mascotas'))categories.push({id:'mascotas',name:'Mascotas y veterinaria',icon:'🐾'});
window.pjUpsertBusinesses([
{name:'Hospedaje y alojamiento Cabañas Don Beto',category:'hospedaje',icon:'🏡',desc:'Cabañas y alojamiento familiar en La Palma, con jardín y opciones de cocina.',address:'200 m este y 100 m norte de la Escuela Independencia, La Palma 60702',phone:'',whatsapp:'',hours:'Check-in reportado 14:00–20:00; confirmar',featured:false,website:''},
{name:'Cerro de Oro Forestal',category:'ferreteria',icon:'🪵',desc:'Comercio forestal y de materiales destacado en La Palma de Puerto Jiménez.',address:'La Palma, cantón de Puerto Jiménez, Puntarenas',phone:'',whatsapp:'',hours:'Consultar horario actual',featured:false,website:''},
{name:'Clínica Veterinaria OsaVet',category:'mascotas',icon:'🐶',desc:'Clínica veterinaria de la Península de Osa con consulta, peluquería canina y farmacia.',address:'Puerto Jiménez, Puntarenas',phone:'',whatsapp:'',hours:'Lun-Vie 07:30–17:30; Sáb 07:30–15:00; confirmar',featured:true,website:''}
]);
el('businessCount').textContent=businesses.length;
el('categoryCount').textContent=categories.length;
renderCategories();
renderBusinesses();