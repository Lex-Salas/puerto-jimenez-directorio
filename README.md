# Puerto Jiménez Directorio

Web app/PWA para descubrir comercios, servicios y experiencias de Puerto Jiménez, Osa, Costa Rica.

## Estado

Directorio comunitario funcional. Los datos provienen de fuentes públicas y pueden cambiar; los horarios y contactos deben confirmarse con cada negocio.

## Funciones

- Búsqueda instantánea
- Filtros por categoría
- Fichas de negocios y servicios
- Enlaces a Google Maps
- Preparado para teléfono y WhatsApp
- Diseño responsive
- Instalable como PWA
- Caché offline con actualización segura de navegación
- Enlaces compartibles por negocio
- Formulario de alta con ubicación de Google Maps y selección de fotos
- Páginas estáticas, datos estructurados y sitemap para buscadores
- Acceso rápido a negocios cercanos mediante la ubicación del dispositivo
- Horarios de buses, vuelos y estado oficial de la lancha Puerto Jiménez–Golfito
- Enlaces de reserva, contacto, fuentes y fecha de verificación de transportes

## Estructura

- `index.html`: interfaz principal
- `styles.css`: estilos responsive
- `app.js`: datos, búsqueda, filtros y fichas
- `manifest.webmanifest`: configuración PWA
- `sw.js`: soporte offline básico
- `icon.svg`: icono inicial
- `negocios/`: fichas estáticas indexables
- `scripts/generate-seo.mjs`: genera fichas y sitemap a partir del directorio

## Actualizar las páginas para buscadores

Después de cambiar los datos, ejecutar `node scripts/generate-seo.mjs` antes de publicar.

## Publicación rápida

Puede publicarse como sitio estático en GitHub Pages, Netlify o Vercel.
