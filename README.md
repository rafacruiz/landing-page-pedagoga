# Landing page para pedagoga

Web de una sola página y rápida: **Astro + Tailwind CSS**.

## Empezar

Necesita [Node.js](https://nodejs.org) 22.12 o superior.

```bash
npm install
npm run dev      # abre http://localhost:4321 y se actualiza al guardar
```

## Personalizar el contenido

**Todo el texto vive en un único archivo: `src/data/site.ts`.** Cambia nombre, servicios,
biografía, preguntas frecuentes y datos de contacto sin tocar ningún componente.
Si dejas un dato de contacto vacío (`''`), ese canal desaparece solo.

### Fotos

Guarda dos imágenes verticales (mejor proporción 4:5) en `src/assets/` con estos nombres:

| Archivo | Dónde aparece |
| --- | --- |
| `perfil.jpg` | Portada |
| `sobre-mi.jpg` | Sección "Sobre mí" |

Vale `.jpg`, `.png` o `.webp`. Astro las optimiza automáticamente (tamaños y formatos modernos).
Mientras no existan, se muestra un marcador con las iniciales.

### Colores y tipografía

Están en `src/styles/global.css`, dentro de `@theme`. Cambiando ahí un color se actualiza toda la web.
Las fuentes (Bricolage Grotesque y Figtree) se sirven desde la propia web, sin depender de Google Fonts.

## Testimonios

Los testimonios incluidos son **de ejemplo**: se ven en local, pero **no se publican** mientras
`isExample` sea `true` en `src/data/site.ts`. Cuando tengas testimonios reales (con permiso de quien
los da), sustitúyelos y pon `isExample: false`.

## Publicar en Netlify (gratis)

1. Sube este proyecto a un repositorio de GitHub.
2. En Netlify: **Add new site → Import an existing project** y elige el repositorio.
   La configuración ya está en `netlify.toml` (comando `npm run build`, carpeta `dist`).
3. Cada `git push` publicará la web automáticamente.

### Dominio propio

1. Añádelo en **Domain management** de Netlify.
2. Cambia `SITE_URL` en `astro.config.mjs` por tu dominio real (afecta al SEO, sitemap y robots.txt).

## Lista de comprobación antes de publicar

- [ ] Sustituir nombre, iniciales, textos y datos de contacto en `src/data/site.ts`
- [ ] Añadir `perfil.jpg` y `sobre-mi.jpg` en `src/assets/`
- [ ] Rellenar los datos de `legal` y revisar `src/pages/aviso-legal.astro` (es una plantilla orientativa)
- [ ] Cambiar `SITE_URL` en `astro.config.mjs`
- [ ] Cambiar `public/favicon.svg` por el icono definitivo
- [ ] Sustituir los testimonios de ejemplo (o dejarlos ocultos)
- [ ] Probar los enlaces de WhatsApp, email y teléfono desde el móvil

## Estructura

```
src/
├── assets/          # tus fotos (perfil.jpg, sobre-mi.jpg)
├── components/      # una sección por archivo (Hero, Services, About...)
├── data/site.ts     # todo el contenido editable
├── layouts/         # estructura común y SEO
├── pages/           # index, aviso legal, 404, robots.txt
└── styles/global.css
```