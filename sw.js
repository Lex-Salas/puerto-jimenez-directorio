const CACHE='pj-guia-v8';
const ASSETS=['./','./index.html','./styles.css','./app.js','./extra-businesses-1.js','./extra-businesses-2.js','./extra-businesses-3.js','./extra-businesses-4.js','./extra-businesses-5.js','./extra-businesses-6.js','./manifest.webmanifest','./icon.svg'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)))});
self.addEventListener('activate',e=>{e.waitUntil(Promise.all([self.clients.claim(),caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))]))});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return;
  if(e.request.mode==='navigate'){
    e.respondWith(fetch(e.request).then(resp=>{const copy=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return resp;}).catch(()=>caches.match(e.request).then(cached=>cached||caches.match('./index.html'))));
    return;
  }
  e.respondWith(caches.match(e.request).then(cached=>{
    const network=fetch(e.request).then(resp=>{if(resp.ok){const copy=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));}return resp;});
    return cached||network;
  }));
});
